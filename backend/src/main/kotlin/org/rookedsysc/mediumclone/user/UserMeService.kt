package org.rookedsysc.mediumclone.user

import org.springframework.stereotype.Service

@Service
class UserMeService(
    private val userRepository: UserRepository
) {

    fun get(user: User) : UserMeResponse {
        return UserMeResponse(
            name = user.name,
            email = user.email,
            profileUrl = user.profileImageUrl
        )
    }

}
