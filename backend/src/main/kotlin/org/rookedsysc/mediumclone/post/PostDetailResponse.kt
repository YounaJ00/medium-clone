package org.rookedsysc.mediumclone.post

import io.swagger.v3.oas.annotations.media.Schema
import org.rookedsysc.mediumclone.comment.CommentListResponse
import org.rookedsysc.mediumclone.user.UserSimpleProfileResponse
import java.time.LocalDateTime

class PostDetailResponse(
    @Schema(description = "게시글 ID", required = true)
    val id: Long,

    @Schema(description = "게시글 제목", required = true)
    val title: String,

    @Schema(description = "게시글 내용", required = true)
    val content: String,

    @Schema(description = "추천 횟수", required = true)
    val clap: Long,

    @Schema(description = "작성일", required = true)
    val createdAt: LocalDateTime,

    @Schema(description = "읽는데 걸리는 시간", required = true)
    val needToRead: String,

    @Schema(description = "작성자 정보", required = true)
    val author: UserSimpleProfileResponse
) {
}
