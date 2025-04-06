package org.rookedsysc.mediumclone.config.security.jwt

data class TokenDto(
    val accessToken: String,
    val refreshToken: String,
)
