package org.rookedsysc.mediumclone.post.service

import org.rookedsysc.mediumclone.post.*
import org.rookedsysc.mediumclone.tag.Tag
import org.rookedsysc.mediumclone.tag.TagRepository
import org.springframework.stereotype.Service

@Service
class PostCreateService(
    private val postRepository: PostRepository,
    private val postConverter: PostConverter,
    private val tagRepository: TagRepository,
) {

    fun create(userId: Long, command: PostCreateCommand): PostResponse {
        val tags: MutableList<Tag> = command.tags.map { tagName ->
            tagRepository.findByName(tagName) ?: Tag(name = tagName)
        }.toMutableList()

        val post: Post = postConverter.toEntity(userId, command)
        post.tags = tags

        val savedPost: Post = postRepository.save(post)

        return postConverter.toResponse(savedPost)
    }

}
