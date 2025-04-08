package org.rookedsysc.mediumclone.post.service

import org.rookedsysc.mediumclone.post.*
import org.springframework.stereotype.Service

@Service
class PostStaffPickService(
    private val postRepository: PostRepository,
) {
    fun get5StaffPicks(): List<PostListResponse> {
        return postRepository.get5StaffPicks().map {
            PostConverter.toListResponse(it)
        }
    }
}
