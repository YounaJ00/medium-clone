package org.rookedsysc.mediumclone.post

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.tags.Tag
import org.rookedsysc.mediumclone.user.User
import org.rookedsysc.mediumclone.user.UserSession
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


@Tag(name = "Post API", description = "게시물 관련 API")
@RestController
@RequestMapping("/api/posts")
class PostController(
    private val postCreateService: PostCreateService,
) {

    @Operation(summary = "새 게시물 생성", description = "새 게시물을 생성합니다.")
    @PostMapping
    fun create(
        @RequestBody command: PostCreateCommand,
        @UserSession user: User
    ): PostResponse {
        return postCreateService.create(
            user.id, command
        )
    }
}
