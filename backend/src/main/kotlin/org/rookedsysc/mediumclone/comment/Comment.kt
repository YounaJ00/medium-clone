package org.rookedsysc.mediumclone.comment

import jakarta.persistence.*
import org.rookedsysc.mediumclone.common.EntityBase
import org.rookedsysc.mediumclone.post.Post
import org.rookedsysc.mediumclone.user.User

@Entity
@Table(name = "comment")
class Comment(
    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    var post: Post,

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    var user: User,

    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    var content: String,

    @Column(name = "parent_id")
    var parentId: Long? = null,

    @Column(name = "clap", nullable = false)
    var clap: Long = 0
) : EntityBase()
