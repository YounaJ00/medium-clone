package org.rookedsysc.mediumclone.config.security.jwt

import io.jsonwebtoken.Claims
import io.jsonwebtoken.ExpiredJwtException
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import io.jsonwebtoken.io.Decoders
import io.jsonwebtoken.security.Keys
import jakarta.annotation.PostConstruct
import org.rookedsysc.mediumclone.common.exception.ApiException
import org.rookedsysc.mediumclone.common.status.DefaultStatus
import org.rookedsysc.mediumclone.config.LogConfig
import org.rookedsysc.mediumclone.config.security.enums.OAuth2Provider
import org.rookedsysc.mediumclone.config.security.enums.UserRole
import org.rookedsysc.mediumclone.config.security.model.OAuth2UserInfo
import org.rookedsysc.mediumclone.user.User
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import java.security.Key
import java.security.SignatureException
import java.util.Date

@Component
class TokenProvider() {
    companion object : LogConfig {
        //        private const val ACCESS_TOKEN_EXPIRE_TIME_IN_MILLISECONDS: Long = 2 * 60 * 60 * 1000 // 2시간
        // TODO: Prod에서는 시간 변경해줘야 함
        private const val ACCESS_TOKEN_EXPIRE_TIME_IN_MILLISECONDS: Long = 30 * 60 * 1000 // 30분
        private const val REFRESH_TOKEN_EXPIRE_TIME_IN_MILLISECONDS: Long = 7 * 24 * 60 * 60 * 1000 // 7일
    }

    @Value("\${jwt.secret}")
    private lateinit var secret: String
    private lateinit var key: Key

    @PostConstruct
    fun init() {
        val key = Decoders.BASE64URL.decode(secret)
        this.key = Keys.hmacShaKeyFor(key)
    }

    fun validateToken(
        token: String,
        type: TokenType,
    ): Boolean {
        return try {
            Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
            val tokenInfo = getTokenInfo(token)
            if (tokenInfo.tokenType != type) {
                throw ApiException(DefaultStatus.TOKEN_TYPE_NOT_MATCH)
            }
            true
        } catch (exception: SignatureException) {
            throw ApiException(DefaultStatus.SIGNATURE_NOT_MATCH)
        } catch (exception: ExpiredJwtException) {
            throw ApiException(DefaultStatus.EXPIRED_TOKEN)
        } catch (exception: Exception) {
            log.error(exception.message + "\n" + exception.stackTrace.toString())
            throw ApiException(DefaultStatus.UNKNOWN_ERROR)
        }
    }

    fun generateToken(oAuth2UserInfo: OAuth2UserInfo): TokenDto {
        val email: String = oAuth2UserInfo.email ?: ""
        val claims =
            mapOf<String, String>(
                "email" to email,
                "identifier" to oAuth2UserInfo.identifier,
                "provider" to oAuth2UserInfo.provider.toString(),
                "role" to oAuth2UserInfo.role.description,
            )

        return createTokenDto(claims)
    }

    fun generateToken(tokenInfo: TokenInfo): TokenDto {
        val claims =
            mapOf(
                "email" to tokenInfo.email,
                "identifier" to tokenInfo.identifier,
                "provider" to tokenInfo.provider.toString(),
                "role" to tokenInfo.role.description,
            )
        return createTokenDto(claims)
    }

    fun generateToken(user: User): TokenDto {
        val claims =
            mapOf(
                "email" to user.email,
                "identifier" to user.identifier,
                "provider" to user.provider.toString(),
                "role" to user.role.description,
            )
        return createTokenDto(claims)
    }

    fun generateTokenByRefreshToken(refreshToken: String): TokenDto {
        validateToken(refreshToken, TokenType.REFRESH)
        val tokenInfo = getTokenInfo(refreshToken)
        return generateToken(tokenInfo)
    }

    private fun createTokenDto(claims: Map<String, String>): TokenDto {
        val accessClaims = HashMap(claims)
        val refreshClaims = HashMap(claims)
        accessClaims["type"] = TokenType.ACCESS.toString()
        refreshClaims["type"] = TokenType.REFRESH.toString()
        return TokenDto(
            accessToken = createToken(accessClaims, ACCESS_TOKEN_EXPIRE_TIME_IN_MILLISECONDS),
            refreshToken = createToken(refreshClaims, REFRESH_TOKEN_EXPIRE_TIME_IN_MILLISECONDS),
        )
    }

    private fun createToken(
        claims: Map<String, String>,
        expirationTimeInMilliseconds: Long,
    ): String {
        return Jwts.builder()
            .setClaims(claims)
            .setIssuedAt(Date())
            .setExpiration(Date(Date().time + expirationTimeInMilliseconds))
            .signWith(key, SignatureAlgorithm.HS512)
            .compact()
    }

    fun getTokenInfo(token: String): TokenInfo {
        val claims: Claims =
            Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .body
        val token =
            TokenInfo(
                email = claims["email"] as String,
                provider = OAuth2Provider.valueOf(claims["provider"] as String),
                identifier = claims["identifier"] as String,
                tokenType = TokenType.valueOf(claims["type"] as String),
                exp = claims.issuedAt,
                iat = claims.expiration,
                role = UserRole.valueOf(claims["role"] as String),
            )

        return token
    }
}
