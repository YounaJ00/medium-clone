package org.rookedsysc.mediumclone.user

import io.swagger.v3.oas.annotations.media.Schema

data class UserMeResponse(
    @Schema(required = true)
    val name: String,

    @Schema(required = true)
    val email: String,

    @Schema(required = true)
    val profileUrl: String,

    ) {}
