package org.rookedsysc.mediumclone.post

import org.rookedsysc.mediumclone.tag.TagResponse
import org.rookedsysc.mediumclone.user.User

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
    }
}
