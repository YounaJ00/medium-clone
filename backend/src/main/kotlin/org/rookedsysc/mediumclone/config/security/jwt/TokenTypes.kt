package org.rookedsysc.mediumclone.config.security.jwt

enum class TokenType(
    val type: String,
) {
    ACCESS("access"),
    REFRESH("refresh"),
}
