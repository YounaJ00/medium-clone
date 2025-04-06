package org.rookedsysc.mediumclone.config.security.enums

enum class OAuth2Provider(
    private val registrationId: String,
) {
    GOOGLE("google"),
    APPLE("apple"),
    ;

    fun getRegistrationId(): String {
        return this.registrationId
    }
}
