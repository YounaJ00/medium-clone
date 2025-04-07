package org.rookedsysc.mediumclone.post

import org.rookedsysc.mediumclone.tag.Tag
import org.rookedsysc.mediumclone.tag.TagResponse
import org.springframework.stereotype.Component

@Component
class PostConverter {
    fun toEntity(userId: Long, command: PostCreateCommand): Post {
        return Post(
            userId = userId,
            title = command.title,
            content = command.content,
        )
    }

    fun toResponse(post: Post): PostResponse {
        return PostResponse(
            id = post.id,
            userId = post.userId,
            title = post.title,
            content = post.content,
            tags = post.tags.map { TagResponse(it.name) }
        )
    }
}
