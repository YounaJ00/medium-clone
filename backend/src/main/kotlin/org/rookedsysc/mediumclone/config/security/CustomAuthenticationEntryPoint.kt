package org.rookedsysc.mediumclone.config.security

import com.fasterxml.jackson.databind.ObjectMapper
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.rookedsysc.mediumclone.common.ApiResponse
import org.rookedsysc.mediumclone.common.status.DefaultStatus
import org.rookedsysc.mediumclone.common.status.StatusIfs
import org.rookedsysc.mediumclone.config.security.jwt.JwtAuthorizationFilter
import org.springframework.context.annotation.Configuration
import org.springframework.security.core.AuthenticationException
import org.springframework.security.web.AuthenticationEntryPoint
import java.nio.charset.StandardCharsets

@Configuration
class CustomAuthenticationEntryPoint(
    private val objectMapper: ObjectMapper,
) : AuthenticationEntryPoint {
    override fun commence(
        request: HttpServletRequest?,
        response: HttpServletResponse?,
        authException: AuthenticationException?,
    ) {
        val status: StatusIfs =
            request?.getAttribute(JwtAuthorizationFilter.SPRING_SECURITY_EXCEPTION)?.let {
                val customCode = it as Int
                DefaultStatus.fromCustomCode(customCode)
            } ?: DefaultStatus.UNKNOWN_ERROR

        // Set response status and body
        response?.characterEncoding = StandardCharsets.UTF_8.name()
        response?.contentType = "application/json"
        response?.status = status.getHttpStatusCode()
        response?.writer?.write(objectMapper.writeValueAsString(ApiResponse.error(status, null)))
    }
}
