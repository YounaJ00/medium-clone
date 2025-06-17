package org.rookedsysc.mediumclone.post

import org.rookedsysc.mediumclone.comment.CommentListResponse
import org.rookedsysc.mediumclone.user.UserSimpleProfileResponse

class PostDetailResponse(
    val id: Long,
    val title: String,
    val content: String,
    val author: UserSimpleProfileResponse
) {
}
