package org.rookedsysc.mediumclone.user

import org.springframework.stereotype.Service

@Service
class UserMeService(
    private val userRepository: UserRepository
) {

    fun get(user: User) : UserSimpleProfileResponse {
        return UserConverter.toSimpleProfileResponse(user)
    }

}
