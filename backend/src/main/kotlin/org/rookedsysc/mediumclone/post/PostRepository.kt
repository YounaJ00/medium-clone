package org.rookedsysc.mediumclone.post

import org.rookedsysc.mediumclone.post.projection.PostListProjection
import org.springframework.data.domain.Page
import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.EntityGraph
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param
import java.util.Optional

interface PostRepository : JpaRepository<Post, Long> {
    @Query("SELECT p FROM Post p WHERE p.title LIKE %:title% OR p.content LIKE %:content%")
    fun searchPostByTitleLikeOrContentLike(@Param("title") title: String, @Param("content") content: String): List<Post>

    @Query("SELECT p FROM Post p ORDER BY p.clap DESC LIMIT 5")
    fun get5StaffPicks(): List<Post>

    fun findAllBy(pageable: Pageable): List<Post>

    @Query(
        """
        SELECT p.id AS id,
               p.title AS title,
               p.content AS content,
               p.createdAt AS date,
               p.clap AS clap,
               SIZE(p.comments) AS commentCount,
               u.id AS userId,
               u.name AS name,
               u.profileImageUrl AS profileImage
        FROM Post p
        JOIN p.user u
        """
    )
    fun findAllPostListProjections(pageable: Pageable): Page<PostListProjection>

    @EntityGraph(attributePaths = ["comments"])
    override fun findById(id: Long): Optional<Post>
}
