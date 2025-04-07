package org.rookedsysc.mediumclone.user

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.Index
import jakarta.persistence.OneToMany
import jakarta.persistence.Table
import org.rookedsysc.mediumclone.common.EntityBase
import org.rookedsysc.mediumclone.config.security.enums.OAuth2Provider
import org.rookedsysc.mediumclone.config.security.enums.UserRole
import org.rookedsysc.mediumclone.post.Post

@Entity
@Table(
    name = "user",
    indexes = [
        Index(name = "idx_user_name", columnList = "name"),
        Index(name = "idx_user_email", columnList = "email"),
        Index(name = "idx_user_unique_email", columnList = "email", unique = true)
    ]
)
data class User(

    var name: String,

    var email: String,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30, columnDefinition = "varchar(255)")
    var provider: OAuth2Provider,

    var identifier: String,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30, columnDefinition = "varchar(255)")
    var role: UserRole,

    @Column(name = "profile_image_url")
    var profileImageUrl: String,

    @OneToMany(mappedBy = "user")
    var posts: MutableList<Post> = mutableListOf(),

    ) : EntityBase()
