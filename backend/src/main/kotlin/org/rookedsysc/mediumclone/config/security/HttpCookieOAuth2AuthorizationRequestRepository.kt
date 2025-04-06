package org.rookedsysc.mediumclone.config.security

import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.rookedsysc.mediumclone.common.utils.CookieUtils
import org.springframework.security.oauth2.client.web.AuthorizationRequestRepository
import org.springframework.security.oauth2.core.endpoint.OAuth2AuthorizationRequest
import org.springframework.stereotype.Component

@Component
class HttpCookieOAuth2AuthorizationRequestRepository() :
    AuthorizationRequestRepository<OAuth2AuthorizationRequest> {
    companion object {
        const val OAUTH2_AUTHORIZATION_REQUEST_COOKIE_NAME: String = "oauth2_auth_request"
        const val REDIRECT_URI_PARAM_COOKIE_NAME: String = "redirect_uri"
        const val MODE_PARAM_COOKIE_NAME: String = "mode"
        private const val COOKIE_EXPIRE_SECONDS = 180
    }

    override fun loadAuthorizationRequest(request: HttpServletRequest): OAuth2AuthorizationRequest? {
        return CookieUtils.getCookie(request, OAUTH2_AUTHORIZATION_REQUEST_COOKIE_NAME)
            ?.let { cookie -> CookieUtils.deserialize(cookie, OAuth2AuthorizationRequest::class.java) }
    }

    override fun saveAuthorizationRequest(
        authorizationRequest: OAuth2AuthorizationRequest?,
        request: HttpServletRequest,
        response: HttpServletResponse,
    ) {
        if (authorizationRequest == null) {
            CookieUtils.deleteCookie(request, response, OAUTH2_AUTHORIZATION_REQUEST_COOKIE_NAME)
            CookieUtils.deleteCookie(request, response, REDIRECT_URI_PARAM_COOKIE_NAME)
            CookieUtils.deleteCookie(request, response, MODE_PARAM_COOKIE_NAME)
            return
        }
        CookieUtils.addCookie(
            response,
            OAUTH2_AUTHORIZATION_REQUEST_COOKIE_NAME,
            CookieUtils.serialize(authorizationRequest),
            COOKIE_EXPIRE_SECONDS,
        )

        val redirectUriAfterLogin: String? = request.getParameter(REDIRECT_URI_PARAM_COOKIE_NAME)
        redirectUriAfterLogin?.let { redirectUri ->
            CookieUtils.addCookie(response, REDIRECT_URI_PARAM_COOKIE_NAME, redirectUri, COOKIE_EXPIRE_SECONDS)
        }

        val mode: String? = request.getParameter(MODE_PARAM_COOKIE_NAME)
        mode?.let {
            CookieUtils.addCookie(response, MODE_PARAM_COOKIE_NAME, mode, COOKIE_EXPIRE_SECONDS)
        }
    }

    override fun removeAuthorizationRequest(
        request: HttpServletRequest,
        response: HttpServletResponse,
    ): OAuth2AuthorizationRequest? {
        return loadAuthorizationRequest(request)
    }
}
