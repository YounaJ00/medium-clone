package org.rookedsysc.mediumclone.user

import io.swagger.v3.oas.annotations.Operation
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@io.swagger.v3.oas.annotations.tags.Tag(name = "User API")
@RestController
@RequestMapping("/api/users")
class UserController(
    private val recommendedUserService: RecommendedUserService,
) {
    @Operation(summary = "추천 유저 조회")
    @GetMapping
    fun findRandomUsers(): List<UserSimpleProfileResponse> {
        return recommendedUserService.findRandomUsers()
    }

}
