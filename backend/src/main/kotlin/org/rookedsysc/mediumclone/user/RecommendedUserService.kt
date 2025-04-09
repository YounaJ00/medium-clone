package org.rookedsysc.mediumclone.user

import org.springframework.stereotype.Service

@Service
class RecommendedUserService(
    private val userRepository: UserRepository,
) {
    fun findRandomUsers(limit: Int = 3): List<UserSimpleProfileResponse> {
        return userRepository.findRandomUsers(limit).map { UserConverter.toSimpleProfileResponse(it) }
    }
}
