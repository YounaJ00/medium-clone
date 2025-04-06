package org.rookedsysc.mediumclone.config.security

import org.rookedsysc.mediumclone.common.exception.ApiException
import org.rookedsysc.mediumclone.common.status.DefaultStatus
import org.rookedsysc.mediumclone.config.LogConfig
import org.rookedsysc.mediumclone.config.security.enums.OAuth2Provider
import org.rookedsysc.mediumclone.config.security.model.GoogleOAuth2UserInfo
import org.rookedsysc.mediumclone.config.security.model.OAuth2UserInfo
import org.rookedsysc.mediumclone.config.security.model.OAuth2UserPrinciple
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest
import org.springframework.security.oauth2.core.user.OAuth2User
import org.springframework.stereotype.Service
import org.springframework.util.StringUtils

@Service
class CustomOAuth2UserService : DefaultOAuth2UserService() {
    companion object : LogConfig

    private fun getOAuth2UserInfo(
        registrationId: String,
        accessToken: String,
        attributes: Map<String, Any>,
    ): OAuth2UserInfo {
        if (OAuth2Provider.GOOGLE.getRegistrationId() == registrationId) {
            return GoogleOAuth2UserInfo(accessToken, attributes)
        } else {
            throw ApiException(DefaultStatus.NOT_FOUND_PROVIDER)
        }
    }

    override fun loadUser(userRequest: OAuth2UserRequest): OAuth2User {
        val oAuth2User = super.loadUser(userRequest)

        try {
            return processOAuth2User(userRequest, oAuth2User)
        } catch (e: Exception) {
            throw ApiException(DefaultStatus.NOT_FOUND_EMAIL)
        }
    }

    private fun processOAuth2User(
        userRequest: OAuth2UserRequest,
        oAuth2User: OAuth2User,
    ): OAuth2User {
        val registrationId: kotlin.String =
            userRequest.clientRegistration
                .registrationId

        val accessToken: kotlin.String =
            userRequest.accessToken
                .tokenValue

        val oAuth2UserInfo: OAuth2UserInfo =
            getOAuth2UserInfo(
                registrationId,
                accessToken,
                oAuth2User.attributes,
            )

        // OAuth2UserInfo field value validation
        if (!StringUtils.hasText(oAuth2UserInfo.email)) {
            throw ApiException(DefaultStatus.NOT_FOUND_EMAIL)
        }

        return OAuth2UserPrinciple(oAuth2UserInfo)
    }
}
