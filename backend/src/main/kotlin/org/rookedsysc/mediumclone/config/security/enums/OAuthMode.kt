package org.rookedsysc.mediumclone.config.security.enums

enum class OAuthMode(
    open val label: String,
) {
    REGISTER("register"),
    LOGIN("login"),
    UNLINK("unlink"),
}
