package org.rookedsysc.mediumclone.tag

import jakarta.persistence.*
import org.rookedsysc.mediumclone.common.EntityBase
import org.rookedsysc.mediumclone.post.Post

@Entity
@Table(
    name = "tag", indexes = [
        Index(name = "idx_created_at", columnList = "created_at"),
        Index(name = "idx_name", columnList = "name", unique = true)
    ]
)
data class Tag(

    @Column(nullable = false)
    var name: String,

    @ManyToMany(mappedBy = "tags")
    var posts: MutableList<Post> = mutableListOf()

) : EntityBase()
