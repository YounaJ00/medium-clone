package org.rookedsysc.mediumclone.user

import org.rookedsysc.mediumclone.config.security.enums.OAuth2Provider
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param

interface UserRepository : JpaRepository<User, Long> {
    fun findByProviderAndIdentifier(provider: OAuth2Provider, identifier: String): User?

    @Query("SELECT u FROM User u WHERE u.email LIKE :email% OR u.name LIKE :name%")
    fun searchByEmailLikeOrNameLike(@Param("email") email: String, @Param("name") name: String): List<User>

    @Query("SELECT u FROM User u ORDER BY FUNCTION('RAND')")
    fun findRandomUsers(limit: Int = 3): List<User>
}
