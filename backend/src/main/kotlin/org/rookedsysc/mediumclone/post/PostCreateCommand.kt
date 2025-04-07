package org.rookedsysc.mediumclone.post

import io.swagger.v3.oas.annotations.media.Schema

@Schema(description = "새 게시물을 생성하기 위한 명령")
data class PostCreateCommand(
    @Schema(description = "게시물의 제목", example = "나의 첫 게시물")
    val title: String,

    @Schema(description = "게시물의 내용", example = "이것은 나의 첫 게시물의 내용입니다.")
    val content: String,

    @Schema(description = "게시물에 연관된 태그", example = "[\"kotlin\", \"spring\"]")
    val tags: List<String>,
)
