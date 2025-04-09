package org.rookedsysc.mediumclone.tag

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.IdClass
import jakarta.persistence.Table
import java.io.Serializable

data class PostTagId(
    var postId: Long = 0,
    var tagId: Long = 0
) : Serializable

@Entity
@Table(name = "post_tag")
@IdClass(PostTagId::class)
class PostTag(
    @Id
    @Column(name = "post_id")
    var postId: Long,

    @Id
    @Column(name = "tag_id")
    var tagId: Long
) {
}
