package org.rookedsysc.mediumclone.post

import org.rookedsysc.mediumclone.user.UserSimpleProfileResponse

data class PostListResponse(
    val id: Long,
    val title: String,
    val content: String,
    val date: String,
    val clap: Long,
    var commentCount: Long = 0,
    val userSimpleProfile: UserSimpleProfileResponse
) {
}
