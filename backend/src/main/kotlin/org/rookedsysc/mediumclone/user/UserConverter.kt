package org.rookedsysc.mediumclone.user

import org.rookedsysc.mediumclone.config.security.enums.UserRole
import org.rookedsysc.mediumclone.config.security.model.OAuth2UserInfo
import java.util.UUID

class UserConverter {
    companion object {
        val defaultProfileUrl: String =
            "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"

        fun toEntity(userInfo: OAuth2UserInfo): User {
            val entity: User =
                User(
                    name =
                    userInfo.name ?: let {
                        UUID.randomUUID()
                            .toString()
                            .substring(0, 8)
                    },
                    email =
                    userInfo.email ?: let {
                        UUID.randomUUID()
                            .toString()
                            .substring(0, 8)
                    },
                    provider = userInfo.provider,
                    identifier = userInfo.identifier,
                    role = UserRole.USER,
                    profileImageUrl =
                    userInfo.profileImageUrl
                        ?: let { defaultProfileUrl },
                )
            return entity
        }

        fun toSimpleProfileResponse(user: User): UserSimpleProfileResponse {
            return UserSimpleProfileResponse(
                userId = user.id,
                name = user.name,
                profileImage = user.profileImageUrl,
            )
        }
    }
}
