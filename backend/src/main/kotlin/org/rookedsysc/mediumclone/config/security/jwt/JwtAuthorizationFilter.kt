package org.rookedsysc.mediumclone.config.security.jwt

import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.rookedsysc.mediumclone.common.exception.ApiException
import org.rookedsysc.mediumclone.common.status.DefaultStatus
import org.rookedsysc.mediumclone.config.security.SecurityConfig
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.util.AntPathMatcher
import org.springframework.util.StringUtils
import org.springframework.web.filter.OncePerRequestFilter

class JwtAuthorizationFilter(private val tokenProvider: TokenProvider) : OncePerRequestFilter() {
    companion object {
        const val AUTHORIZATION_HEADER = "Authorization"
        const val BEARER_PREFIX = "Bearer "
        const val TOKEN_INFO_ATTRIBUTES_KEY = "tokenInfo"
        const val SPRING_SECURITY_EXCEPTION = "SPRING_SECURITY_EXCEPTION"
    }

    override fun shouldNotFilter(request: HttpServletRequest): Boolean {
        return SecurityConfig.excludedUrls.any { url -> AntPathMatcher().match(url, request.servletPath) }
    }

    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain,
    ) {
        val token: String? = resolveToken(request)
        try {
            if (token != null && tokenProvider.validateToken(token, TokenType.ACCESS)) {
                val tokenInfo: TokenInfo = tokenProvider.getTokenInfo(token)
                val auth: Authentication = getAuthentication(tokenInfo)
                request.setAttribute(TOKEN_INFO_ATTRIBUTES_KEY, auth.principal)
                SecurityContextHolder.getContext().authentication = auth
            }
        } catch (e: ApiException) {
            // add request Attribute for ExceptionHandler
            request.setAttribute(SPRING_SECURITY_EXCEPTION, e.status.getCustomStatusCode())
        } catch (e: Exception) {
            request.setAttribute(SPRING_SECURITY_EXCEPTION, DefaultStatus.UNKNOWN_ERROR)
        }
        filterChain.doFilter(request, response)
    }

    private fun resolveToken(request: HttpServletRequest): String? {
        val token = request.getHeader(AUTHORIZATION_HEADER)
        if (StringUtils.hasText(token) && token.startsWith(BEARER_PREFIX)) {
            return token.substring(BEARER_PREFIX.length)
        }
        return null
    }

    private fun getAuthentication(tokenInfo: TokenInfo): Authentication {
        return UsernamePasswordAuthenticationToken(tokenInfo, "", getAuthorities(tokenInfo))
    }

    private fun getAuthorities(tokenInfo: TokenInfo): Collection<GrantedAuthority> {
        val authorities = mutableListOf<GrantedAuthority>()
        authorities.add(SimpleGrantedAuthority(tokenInfo.role.key))
        return authorities
    }
}
