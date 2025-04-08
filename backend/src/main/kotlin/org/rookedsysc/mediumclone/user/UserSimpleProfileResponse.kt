package org.rookedsysc.mediumclone.user

data class UserSimpleProfileResponse (
    val userId: Long,
    val name: String,
    val profileImage: String,
) {
}
