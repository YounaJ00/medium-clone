package org.rookedsysc.mediumclone.config.security

import org.rookedsysc.mediumclone.config.security.enums.UserRole
import org.rookedsysc.mediumclone.config.security.jwt.JwtAuthorizationFilter
import org.rookedsysc.mediumclone.config.security.jwt.TokenProvider
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.invoke
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter
import org.springframework.web.servlet.handler.HandlerMappingIntrospector

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
class SecurityConfig(
    private val customOAuthService: CustomOAuth2UserService,
    private val oAuthSuccessHandler: OAuthSuccessHandler,
    private val oAuthFailureHandler: OAuthFailureHandler,
    private val httpsCookieOAuth2AuthorizationRequestRepository: HttpCookieOAuth2AuthorizationRequestRepository,
    private val tokenProvider: TokenProvider,
    private val customAuthenticationEntryPoint: CustomAuthenticationEntryPoint,
) {
    companion object {
        val excludedUrls: Array<String> =
            arrayOf(
                "/",
                "/favicon.ico",
                "/css/**",
                "/images/**",
                "/js/**",
                "/h2-console/**",
                "/custom/**",
                "/actuator/**",
                "/v3/api-docs/**",
                "/swagger-ui/**",
                "/swagger-ui.html",
                "/open-api/**",
            )
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }

    @Bean
    fun filterChain(
        http: HttpSecurity,
        introspector: HandlerMappingIntrospector,
    ): SecurityFilterChain {
        http {
            authorizeHttpRequests {
                authorize(
                    "/api/**",
                    hasRole(
                        UserRole.USER.description,
                    ),
                )
            }

            authorizeHttpRequests {
                excludedUrls.forEach { url ->
                    authorize(url, permitAll)
                }
            }
            authorizeHttpRequests { }
            formLogin { disable() }
            httpBasic { disable() }
            csrf { disable() }
            addFilterBefore<UsernamePasswordAuthenticationFilter>(
                filter = JwtAuthorizationFilter(tokenProvider = tokenProvider),
            )
            oauth2Login {
                authorizationEndpoint {
                    authorizationRequestRepository = httpsCookieOAuth2AuthorizationRequestRepository
                }
                userInfoEndpoint {
                    userService = customOAuthService
                    authenticationSuccessHandler = oAuthSuccessHandler
                    authenticationFailureHandler = oAuthFailureHandler
                }
            }
            exceptionHandling {
                authenticationEntryPoint = customAuthenticationEntryPoint
            }
        }
        return http.build()
    }
}
