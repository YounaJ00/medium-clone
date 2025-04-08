package org.rookedsysc.mediumclone.post

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.tags.Tag
import org.rookedsysc.mediumclone.post.service.PostCreateService
import org.rookedsysc.mediumclone.post.service.PostListService
import org.rookedsysc.mediumclone.post.service.PostStaffPickService
import org.rookedsysc.mediumclone.user.User
import org.rookedsysc.mediumclone.user.UserSession
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController


@Tag(name = "Post API", description = "게시물 관련 API")
@RestController
@RequestMapping("/api/posts")
class PostController(
    private val postCreateService: PostCreateService,
    private val postListService: PostListService,
    private val postStaffPickService: PostStaffPickService
) {
    @Operation(summary = "게시물 목록 조회")
    @GetMapping
    fun list(
        @RequestParam(defaultValue = "0") page: Int,
        @RequestParam(defaultValue = "10") size: Int,
    ): List<PostListResponse> {
        val pageable: Pageable = PageRequest.of(page, size)
        return postListService.findAllBy(pageable)
    }

    @Operation(summary = "Staff 추천")
    @GetMapping("/staff")
    fun staff(): List<PostListResponse> {
        return postStaffPickService.get5StaffPicks()
    }

    @Operation(summary = "새 게시물 생성")
    @PostMapping
    fun create(
        @RequestBody command: PostCreateCommand,
        @UserSession user: User
    ): PostResponse {
        return postCreateService.create(
            user, command
        )
    }
}
