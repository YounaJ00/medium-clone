package org.rookedsysc.mediumclone.post.service

import org.rookedsysc.mediumclone.post.PostConverter
import org.rookedsysc.mediumclone.post.PostListResponse
import org.rookedsysc.mediumclone.post.PostRepository
import org.rookedsysc.mediumclone.post.projection.PostListProjection
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.stereotype.Service

@Service
class PostListService(
    private val postRepository: PostRepository
) {
    fun findAllBy(pageable: Pageable): Page<PostListResponse> {
        val projections: Page<PostListProjection> = postRepository.findAllPostListProjections(pageable)
        return projections.map { PostConverter.toListResponse(it) }
    }
}
