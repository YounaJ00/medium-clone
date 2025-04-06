package org.rookedsysc.mediumclone.user

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.EnumType
import jakarta.persistence.Enumerated
import jakarta.persistence.Table
import org.rookedsysc.mediumclone.common.EntityBase
import org.rookedsysc.mediumclone.config.security.enums.OAuth2Provider
import org.rookedsysc.mediumclone.config.security.enums.UserRole

@Entity
@Table(name = "user")
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

) : EntityBase()
