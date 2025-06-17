package org.rookedsysc.mediumclone.post.service

import jakarta.transaction.Transactional
import org.rookedsysc.mediumclone.post.PostConverter
import org.rookedsysc.mediumclone.post.PostDetailResponse
import org.rookedsysc.mediumclone.post.PostRepository
import org.springframework.stereotype.Service

@Service
@Transactional
class PostClapService(
    private val postRepository: PostRepository
) {
    fun clap(postId: Long) : PostDetailResponse{
        val post = postRepository.findByIdForUpdate(postId).orElseThrow {
            IllegalArgumentException("Post with id $postId not found")
        }
        post.clap += 1
        val postResponse: PostDetailResponse = PostConverter.toDetailResponse(postRepository.save(post))
        return postResponse
    }
}
