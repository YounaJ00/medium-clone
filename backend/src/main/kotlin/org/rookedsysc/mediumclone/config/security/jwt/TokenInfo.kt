package org.rookedsysc.mediumclone.config.security.jwt

import org.rookedsysc.mediumclone.config.security.enums.OAuth2Provider
import org.rookedsysc.mediumclone.config.security.enums.UserRole
import java.util.Date

data class TokenInfo(
    val email: String,
    val provider: OAuth2Provider,
    val identifier: String,
    val tokenType: TokenType,
    val role: UserRole,
    val iat: Date,
    val exp: Date,
)
