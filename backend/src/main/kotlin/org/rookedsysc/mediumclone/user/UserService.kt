package org.rookedsysc.mediumclone.user

import jakarta.transaction.Transactional
import org.rookedsysc.mediumclone.common.exception.ApiException
import org.rookedsysc.mediumclone.common.status.DefaultStatus
import org.rookedsysc.mediumclone.config.security.enums.OAuth2Provider
import org.springframework.stereotype.Service

@Service
@Transactional
class UserService(
    private val userRepository: UserRepository,
) {
    fun login(
        provider: OAuth2Provider,
        identifier: String,
    ): User {
        return userRepository.findByProviderAndIdentifier(provider, identifier) ?: throw ApiException(DefaultStatus.NOT_FOUND_EMAIL)
    }

    fun register(user: User): User {
        return userRepository.save(user)
    }
}
