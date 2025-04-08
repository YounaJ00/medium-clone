package org.rookedsysc.mediumclone.post

import jakarta.persistence.*
import org.rookedsysc.mediumclone.common.EntityBase
import org.rookedsysc.mediumclone.tag.Tag
import org.rookedsysc.mediumclone.user.User

@Entity
@Table(
    name = "post", indexes = [
        Index(name = "idx_user_id", columnList = "user_id")
    ]
)
data class Post(

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    var user: User,

    @Column(nullable = false)
    var title: String,

    @Column(nullable = false, columnDefinition = "TEXT")
    var content: String,

    @Column(nullable = false)
    var clap: Long = 0,

    @ManyToMany(cascade = [CascadeType.PERSIST])
    @JoinTable(
        name = "post_tag",
        joinColumns = [JoinColumn(name = "post_id")],
        inverseJoinColumns = [JoinColumn(name = "tag_id")]
    )
    var tags: MutableList<Tag> = mutableListOf()

) : EntityBase()
