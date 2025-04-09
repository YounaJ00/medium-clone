package org.rookedsysc.mediumclone.comment

import org.rookedsysc.mediumclone.user.UserConverter
import org.rookedsysc.mediumclone.user.UserSimpleProfileResponse

class CommentConverter {
    companion object {
        fun toResponse(comment: Comment): CommentListResponse {
            val userSimpleProfileResponse: UserSimpleProfileResponse = UserConverter.toSimpleProfileResponse(
                user = comment.user
            )
            return CommentListResponse(
                id = comment.id,
                content = comment.content,
                userSimpleProfileResponse = userSimpleProfileResponse,
            )
        }
    }
}
