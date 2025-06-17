package org.rookedsysc.mediumclone.post

import org.rookedsysc.mediumclone.comment.CommentConverter
import org.rookedsysc.mediumclone.comment.CommentListResponse
import org.rookedsysc.mediumclone.common.utils.DateTimeUtils
import org.rookedsysc.mediumclone.post.projection.PostListProjection
import org.rookedsysc.mediumclone.tag.TagResponse
import org.rookedsysc.mediumclone.user.User
import org.rookedsysc.mediumclone.user.UserConverter
import org.rookedsysc.mediumclone.user.UserSimpleProfileResponse

class PostConverter {
    companion object {
        fun toEntity(user: User, command: PostCreateCommand): Post {
            return Post(
                user = user,
                title = command.title,
                content = command.content,
            )
        }

        fun toResponse(post: Post): PostResponse {
            return PostResponse(
                id = post.id,
                userId = post.user.id,
                title = post.title,
                content = post.content,
                tags = post.tags.map { TagResponse(it.name) }
            )
        }

        fun toDetailResponse(post: Post): PostDetailResponse {
            val userSimpleProfileResponse: UserSimpleProfileResponse = UserConverter.toSimpleProfileResponse(
                user = post.user
            )
            val needToRead: String = "${post.content.length / 100} minutes to read"
            return PostDetailResponse(
                id = post.id,
                title = post.title,
                content = post.content,
                author = userSimpleProfileResponse,
                clap = post.clap,
                createdAt = post.createdAt,
                needToRead = needToRead
            )
        }

        fun toListResponse(post: Post): PostListResponse {
            val userSimpleProfileResponse: UserSimpleProfileResponse = UserConverter.toSimpleProfileResponse(
                user = post.user
            )
            return PostListResponse(
                id = post.id,
                title = post.title,
                content = post.content,
                date = DateTimeUtils.timeAgo(post.createdAt),
                clap = post.clap,
                commentCount = post.comments.size.toLong(),
                userSimpleProfile = userSimpleProfileResponse,
            )
        }

        fun toListResponse(post: PostListProjection): PostListResponse {
            val userSimpleProfileResponse: UserSimpleProfileResponse = UserSimpleProfileResponse(
                userId = post.getUserId(),
                name = post.getName(),
                profileImage = post.getProfileImage() ?: "",
            )
            return PostListResponse(
                id = post.getId(),
                title = post.getTitle(),
                content = post.getContent(),
                date = DateTimeUtils.timeAgo(post.getDate()),
                clap = post.getClap(),
                userSimpleProfile = userSimpleProfileResponse,
                commentCount = post.getCommentCount(),
            )
        }
    }
}
