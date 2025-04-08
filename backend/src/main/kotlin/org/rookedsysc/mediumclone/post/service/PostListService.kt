package org.rookedsysc.mediumclone.post.service

import org.rookedsysc.mediumclone.post.PostConverter
import org.rookedsysc.mediumclone.post.PostListResponse
import org.rookedsysc.mediumclone.post.PostRepository
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class PostListService(
    private val postRepository: PostRepository
) {
    fun findAllBy(pageable: Pageable): List<PostListResponse> {
        return postRepository.findAllBy(pageable).map {
            PostConverter.toListResponse(it)
        }
    }
}
