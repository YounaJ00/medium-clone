package org.rookedsysc.mediumclone.user

import org.rookedsysc.mediumclone.common.exception.ApiException
import org.rookedsysc.mediumclone.common.status.DefaultStatus
import org.rookedsysc.mediumclone.config.security.jwt.JwtAuthorizationFilter
import org.rookedsysc.mediumclone.config.security.jwt.TokenInfo
import org.springframework.core.MethodParameter
import org.springframework.stereotype.Component
import org.springframework.web.bind.support.WebDataBinderFactory
import org.springframework.web.context.request.NativeWebRequest
import org.springframework.web.context.request.RequestAttributes
import org.springframework.web.context.request.RequestContextHolder
import org.springframework.web.method.support.HandlerMethodArgumentResolver
import org.springframework.web.method.support.ModelAndViewContainer

@Component
class UserSessionResolver(
    private val userRepository: UserRepository,
) : HandlerMethodArgumentResolver {
    override fun supportsParameter(parameter: MethodParameter): Boolean {
        val annotation = parameter.getParameterAnnotation(UserSession::class.java)
        val parameterType: Boolean = parameter.parameterType == User::class.java

        return annotation != null && parameterType
    }

    override fun resolveArgument(
        parameter: MethodParameter,
        mavContainer: ModelAndViewContainer?,
        webRequest: NativeWebRequest,
        binderFactory: WebDataBinderFactory?,
    ): Any? {
        val requestContext = RequestContextHolder.getRequestAttributes()
        val tokenInfo: TokenInfo? =
            requestContext!!.getAttribute(
                JwtAuthorizationFilter.TOKEN_INFO_ATTRIBUTES_KEY,
                RequestAttributes.SCOPE_REQUEST,
            ) as TokenInfo?
        if (tokenInfo == null) {
            throw ApiException(DefaultStatus.NULL_POINT)
        }

        val user: User? =
            userRepository.findByProviderAndIdentifier(
                tokenInfo.provider, tokenInfo.identifier,
            ) ?: let {
                throw ApiException(DefaultStatus.NOT_VALID_TOKEN)
            }
        return user
    }
}
