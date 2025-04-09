package org.rookedsysc.mediumclone.comment

import org.rookedsysc.mediumclone.user.UserSimpleProfileResponse

data class CommentListResponse(
    val id: Long,
    val content: String,
    val userSimpleProfileResponse: UserSimpleProfileResponse,
) {}
