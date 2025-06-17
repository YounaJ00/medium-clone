package org.rookedsysc.mediumclone.user

import org.springframework.stereotype.Service

@Service
class UserDeleteService(
    private val userRepository: UserRepository,
) {
    fun deleteUser(user: User) {
        userRepository.delete(user)
    }
}
