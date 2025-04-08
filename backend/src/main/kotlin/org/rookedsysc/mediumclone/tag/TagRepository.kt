package org.rookedsysc.mediumclone.tag

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query

interface TagRepository : JpaRepository<Tag, Long> {
    fun findByName(name: String): Tag?

    @Query("SELECT t FROM Tag t WHERE t.name LIKE :keyword%")
    fun searchTagsByNameLike(keyword: String): List<Tag>

    @Query("""
        SELECT t FROM Tag t 
        WHERE t.id in (
            SELECT pt.tagId FROM PostTag pt 
            GROUP BY pt.tagId
            ORDER BY COUNT(pt.postId) DESC
        )
    """)
    fun findTop5TagsByPostCount(): List<Tag>
}
