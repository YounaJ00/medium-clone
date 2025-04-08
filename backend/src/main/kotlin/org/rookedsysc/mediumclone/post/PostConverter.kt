package org.rookedsysc.mediumclone.post

import org.rookedsysc.mediumclone.tag.TagResponse
import org.rookedsysc.mediumclone.user.User
import org.rookedsysc.mediumclone.user.UserConverter
import org.rookedsysc.mediumclone.user.UserSimpleProfileResponse

class PostConverter {
    companion object {
        fun toEntity(user: User, command: PostCreateCommand): Post {
            return Post(
                user = user,
                title = command.title,
                content = command.content,
            )
        }

        fun toResponse(post: Post): PostResponse {
            return PostResponse(
                id = post.id,
                userId = post.user.id,
                title = post.title,
                content = post.content,
                tags = post.tags.map { TagResponse(it.name) }
            )
        }

        fun toListResponse(post: Post): PostListResponse {
            val userSimpleProfileResponse: UserSimpleProfileResponse = UserConverter.toSimpleProfileResponse(
                user = post.user
            )
            return PostListResponse(
                id = post.id,
                title = post.title,
                content = post.content,
                date = post.createdAt.toString(),
                clap = post.clap,
                userSimpleProfile = userSimpleProfileResponse
            )
        }

    }
}
