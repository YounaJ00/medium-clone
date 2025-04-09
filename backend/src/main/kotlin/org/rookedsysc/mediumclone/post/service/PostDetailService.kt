package org.rookedsysc.mediumclone.post.service

import org.rookedsysc.mediumclone.post.PostConverter
import org.rookedsysc.mediumclone.post.PostDetailResponse
import org.rookedsysc.mediumclone.post.PostRepository
import org.springframework.stereotype.Service

@Service
class PostDetailService(
    private val postRepository: PostRepository,
) {

    fun getPostDetail(postId: Long): PostDetailResponse {
        val post = postRepository.findById(postId).orElseThrow {
            IllegalArgumentException("Post not found")
        }
        return PostConverter.toDetailResponse(post)
    }
}
