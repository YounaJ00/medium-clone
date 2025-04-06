package org.rookedsysc.mediumclone.config.security

import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.rookedsysc.mediumclone.common.exception.ApiException
import org.rookedsysc.mediumclone.common.status.DefaultStatus
import org.rookedsysc.mediumclone.common.utils.CookieUtils
import org.rookedsysc.mediumclone.config.security.HttpCookieOAuth2AuthorizationRequestRepository.Companion.MODE_PARAM_COOKIE_NAME
import org.rookedsysc.mediumclone.config.security.HttpCookieOAuth2AuthorizationRequestRepository.Companion.REDIRECT_URI_PARAM_COOKIE_NAME
import org.rookedsysc.mediumclone.config.security.enums.OAuthMode
import org.rookedsysc.mediumclone.config.security.jwt.TokenDto
import org.rookedsysc.mediumclone.config.security.jwt.TokenProvider
import org.rookedsysc.mediumclone.config.security.model.OAuth2UserInfo
import org.rookedsysc.mediumclone.config.security.model.OAuth2UserPrinciple
import org.rookedsysc.mediumclone.user.User
import org.rookedsysc.mediumclone.user.UserConverter
import org.rookedsysc.mediumclone.user.UserService
import org.springframework.security.core.Authentication
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler
import org.springframework.stereotype.Component
import org.springframework.web.util.UriComponentsBuilder

@Component
class OAuthSuccessHandler(
    private val httpCookieOAuth2AuthorizationRequestRepository: HttpCookieOAuth2AuthorizationRequestRepository,
    private val tokenProvider: TokenProvider,
    private val userService: UserService,
    private val userConverter: UserConverter,
) : SimpleUrlAuthenticationSuccessHandler() {
    private val tokenDto: String = "tokenDto"

    override fun onAuthenticationSuccess(
        request: HttpServletRequest,
        response: HttpServletResponse,
        authentication: Authentication,
    ) {
        handleAuthFunction(authentication, request, response)

        val targetRedirectUrl = determineTargetUrl(request)

        if (response.isCommitted) {
            throw ApiException(DefaultStatus.EXPIRED_REQUEST)
        }
        clearAuthenticationAttributes(request, response)

        this.redirectStrategy.sendRedirect(request, response, targetRedirectUrl)
    }

    /**
     * 로그인 할건지 로그아웃 할건지 정하는 메서드
     */
    private fun handleAuthFunction(
        authentication: Authentication,
        request: HttpServletRequest,
        response: HttpServletResponse,
    ) {
        val principle: OAuth2UserPrinciple =
            getOAuth2UserPrincipal(authentication)
                ?: throw ApiException(DefaultStatus.LOGIN_FAILED)

        val mode: String = CookieUtils.getCookie(request, MODE_PARAM_COOKIE_NAME)?.value.toString()

        when (mode) {
            OAuthMode.REGISTER.label -> {
                val token = register(principle.getUserinfo())
                request.setAttribute(tokenDto, token)
            }

            OAuthMode.LOGIN.label -> {
                val token = login(principle.getUserinfo())
                request.setAttribute(tokenDto, token)
            }

            OAuthMode.UNLINK.label -> {
                //TODO: 아직 구현되지 않음
                throw ApiException(DefaultStatus.UNLINK_FAILED)
//                unlink(principle)
            }

            else -> {
                throw ApiException(DefaultStatus.AUTHENTICATION_FAILED)
            }
        }
    }

    private fun register(
        userInfo: OAuth2UserInfo,
    ): TokenDto {
        val user: User = userService.register(userConverter.toEntity(userInfo))

        val token: TokenDto = tokenProvider.generateToken(user)

        return token
    }

    private fun login(
        userInfo: OAuth2UserInfo,
    ): TokenDto {
        val user: User = userService.login(userInfo.provider, userInfo.identifier)

        val token: TokenDto = tokenProvider.generateToken(user)

        return token
    }

    private fun getOAuth2UserPrincipal(authentication: Authentication): OAuth2UserPrinciple? {
        val principal = authentication.principal

        if (principal is OAuth2UserPrinciple) {
            return principal as OAuth2UserPrinciple
        }
        return null
    }

    private fun determineTargetUrl(request: HttpServletRequest): String {
        val redirectUrl: String? =
            CookieUtils.getCookie(request, REDIRECT_URI_PARAM_COOKIE_NAME)
                ?.let { obj: Cookie -> obj.value }

        var targetUrl: String = redirectUrl ?: defaultTargetUrl

        val token: TokenDto? = request.getAttribute(tokenDto) as TokenDto
        token?.let {
            targetUrl =
                UriComponentsBuilder.fromUriString(targetUrl)
                    .queryParam("accessToken", token.accessToken)
                    .queryParam("refreshToken", token.refreshToken)
                    .build()
                    .toUriString()
        }
        return targetUrl
    }

    private fun clearAuthenticationAttributes(
        request: HttpServletRequest,
        response: HttpServletResponse,
    ) {
        super.clearAuthenticationAttributes(request)
        httpCookieOAuth2AuthorizationRequestRepository.removeAuthorizationRequest(request, response)
    }
}
