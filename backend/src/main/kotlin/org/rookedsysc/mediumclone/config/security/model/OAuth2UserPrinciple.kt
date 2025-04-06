package org.rookedsysc.mediumclone.config.security.model

import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.oauth2.core.user.OAuth2User

class OAuth2UserPrinciple(private val userInfo: OAuth2UserInfo) : OAuth2User, UserDetails {
    fun getUserinfo(): OAuth2UserInfo {
        return this.userInfo
    }

    override fun getPassword(): String {
        return userInfo.passwd ?: "null"
    }

    override fun getUsername(): String {
        return userInfo.email ?: "null"
    }

    override fun isAccountNonExpired(): Boolean {
        return true
    }

    override fun isAccountNonLocked(): Boolean {
        return true
    }

    override fun isCredentialsNonExpired(): Boolean {
        return true
    }

    override fun isEnabled(): Boolean {
        return true
    }

    override fun getAttributes(): Map<String, Any> {
        return userInfo.attributes
    }

    override fun getAuthorities(): Collection<GrantedAuthority> {
        return emptyList()
    }

    override fun getName(): String {
        return userInfo.name ?: "null"
    }
}
