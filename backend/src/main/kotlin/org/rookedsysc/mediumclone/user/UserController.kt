package org.rookedsysc.mediumclone.user

import io.swagger.v3.oas.annotations.Operation
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@io.swagger.v3.oas.annotations.tags.Tag(name = "User API")
@RestController
@RequestMapping("/api/users")
class UserController(
    private val recommendedUserService: RecommendedUserService,
    private val userDeleteService: UserDeleteService
) {
    @Operation(summary = "추천 유저 조회")
    @GetMapping
    fun findRandomUsers(): List<UserSimpleProfileResponse> {
        return recommendedUserService.findRandomUsers()
    }

    @Operation(summary = "회원 탈퇴(Access Token만 보내면 알아서 User 추출해서 탈퇴처리)")
    @DeleteMapping
    fun deleteUser(@UserSession user: User) {
        userDeleteService.deleteUser(user)
    }
}
