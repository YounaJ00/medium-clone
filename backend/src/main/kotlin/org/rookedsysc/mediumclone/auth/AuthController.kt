package org.rookedsysc.mediumclone.auth

import io.swagger.v3.oas.annotations.Operation
import org.rookedsysc.mediumclone.common.ApiResponse
import org.rookedsysc.mediumclone.config.security.jwt.RefreshTokenRequest
import org.rookedsysc.mediumclone.config.security.jwt.TokenDto
import org.rookedsysc.mediumclone.config.security.jwt.TokenProvider
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/open-api/auth")
class AuthController(
    private val tokenProvider: TokenProvider
) {
    @Operation(summary = "Refresh Token으로 새로운 토큰 발급")
    @PostMapping("/renew")
    fun refresh(
        @RequestBody request: RefreshTokenRequest,
    ): ApiResponse<TokenDto> {
        val newToken = tokenProvider.generateTokenByRefreshToken(request.refreshToken)
        return ApiResponse.ok(newToken)
    }
}
