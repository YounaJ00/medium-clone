package org.rookedsysc.mediumclone.tag

import org.springframework.data.jpa.repository.JpaRepository

interface TagRepository : JpaRepository<Tag, Long> {
    fun findByName(name: String): Tag?
}
