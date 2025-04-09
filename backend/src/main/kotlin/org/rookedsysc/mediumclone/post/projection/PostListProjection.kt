package org.rookedsysc.mediumclone.post.projection

import java.time.LocalDateTime

interface PostListProjection {
    fun getId(): Long
    fun getTitle(): String
    fun getContent(): String
    fun getDate(): LocalDateTime
    fun getClap(): Long
    fun getCommentCount(): Long
    fun getUserId(): Long
    fun getName(): String
    fun getProfileImage(): String
}
