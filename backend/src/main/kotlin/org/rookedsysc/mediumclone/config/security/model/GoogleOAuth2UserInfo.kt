package org.rookedsysc.mediumclone.config.security.model

import org.rookedsysc.mediumclone.config.security.enums.OAuth2Provider
import org.rookedsysc.mediumclone.config.security.enums.UserRole
import java.time.LocalDateTime

data class GoogleOAuth2UserInfo(
    override val accessToken: String,
    override val attributes: Map<String, Any>,
    override val provider: OAuth2Provider = OAuth2Provider.GOOGLE,
    override val identifier: String = attributes["sub"] as String,
    override val email: String? = attributes["email"] as String?,
    override val birth: LocalDateTime? = attributes["birthdays"] as? LocalDateTime,
    override val name: String? = attributes["name"] as String?,
    override val firstName: String? = attributes["given_name"] as String?,
    override val lastName: String? = attributes["family_name"] as String?,
    override val nickname: String? = attributes["nickname"] as String?,
    override val profileImageUrl: String? = attributes["picture"] as String?,
    override val passwd: String? = null,
    override val role: UserRole = UserRole.USER,
) : OAuth2UserInfo {
    override fun copyWith(role: UserRole): OAuth2UserInfo {
        return this.copy(role = role)
    }
}
