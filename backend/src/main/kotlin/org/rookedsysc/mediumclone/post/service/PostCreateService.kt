package org.rookedsysc.mediumclone.post.service

import org.rookedsysc.mediumclone.post.*
import org.rookedsysc.mediumclone.tag.Tag
import org.rookedsysc.mediumclone.tag.TagRepository
import org.rookedsysc.mediumclone.user.User
import org.springframework.stereotype.Service

@Service
class PostCreateService(
    private val postRepository: PostRepository,
    private val tagRepository: TagRepository,
) {

    fun create(user: User, command: PostCreateCommand): PostResponse {
        val tags: MutableList<Tag> = command.tags.map { tagName ->
            tagRepository.findByName(tagName) ?: Tag(name = tagName)
        }.toMutableList()

        val post: Post = PostConverter.toEntity(user, command)
        post.tags = tags

        val savedPost: Post = postRepository.save(post)

        return PostConverter.toResponse(savedPost)
    }

}
