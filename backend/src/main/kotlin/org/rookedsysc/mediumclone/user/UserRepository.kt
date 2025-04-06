package org.rookedsysc.mediumclone.user

import org.rookedsysc.mediumclone.config.security.enums.OAuth2Provider
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository: JpaRepository<User, Long> {
    fun findByProviderAndIdentifier(provider: OAuth2Provider, identifier: String): User?
}
