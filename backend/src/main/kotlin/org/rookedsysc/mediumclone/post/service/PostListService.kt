package org.rookedsysc.mediumclone.post.service

import org.rookedsysc.mediumclone.common.PageResponse
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
    fun findAllBy(pageable: Pageable): PageResponse<PostListResponse> {
        val projections: Page<PostListProjection> = postRepository.findAllPostListProjections(pageable)
        val responses: List<PostListResponse> = projections.content.map { PostConverter.toListResponse(it) }

        val response: PageResponse<PostListResponse> = PageResponse<PostListResponse>(
            page = projections.totalPages,
            size = projections.size,
            elements = responses
        )
        return response
    }
}
