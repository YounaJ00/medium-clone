package org.rookedsysc.mediumclone.config.security.model

import org.rookedsysc.mediumclone.config.security.enums.OAuth2Provider
import org.rookedsysc.mediumclone.config.security.enums.UserRole
import java.time.LocalDateTime

interface OAuth2UserInfo {
    val attributes: Map<String, Any>
    val provider: OAuth2Provider
    val accessToken: String

    /**
     * https://developers.google.com/assistant/identity/google-sign-in-oauth?hl=ko
     * 에 따르면 Google의 Unique ID는 sub로 제공된다.
     */
    val identifier: String
    val email: String?
    val birth: LocalDateTime?
    val name: String?
    val firstName: String?
    val lastName: String?
    val nickname: String?
    val profileImageUrl: String?
    val passwd: String?
    val role: UserRole

    fun copyWith(role: UserRole = this.role): OAuth2UserInfo
}
