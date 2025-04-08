package org.rookedsysc.mediumclone.post

import org.springframework.data.domain.Pageable
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.query.Param

interface PostRepository : JpaRepository<Post, Long> {
    @Query("SELECT p FROM Post p WHERE p.title LIKE %:title% OR p.content LIKE %:content%")
    fun searchPostByTitleLikeOrContentLike(@Param("title") title: String, @Param("content") content: String): List<Post>

    fun findAllBy(pageable: Pageable): List<Post>
}
