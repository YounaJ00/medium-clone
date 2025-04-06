package org.rookedsysc.mediumclone.common.status

import org.springframework.http.HttpStatus

enum class DefaultStatus(
    private val httpStatusCode: Int,
    private val customStatusCode: Int,
    private val description: String,
) : StatusIfs {
    OK(200, 200, "OK"),
    BAD_REQUEST(400, 400, "Wrong Request"),
    SERVER_ERROR(500, 500, "Server Error"),
    NULL_POINT(500, 512, "Null point error"),

    ///# Security
    EXPIRED_TOKEN(HttpStatus.UNAUTHORIZED.value(), 1401, "Token is expired."),
    EXPIRED_REQUEST(HttpStatus.REQUEST_TIMEOUT.value(), 1402, "Request is expired."),
    LOGIN_FAILED(HttpStatus.INTERNAL_SERVER_ERROR.value(), 1403, "Failed to login."),
    NOT_FOUND_EMAIL(HttpStatus.NOT_FOUND.value(), 1404, "Not found email."),
    NOT_FOUND_PROVIDER(HttpStatus.NOT_FOUND.value(), 1405, "Not found provider."),
    WRONG_MODE(HttpStatus.BAD_REQUEST.value(), 1406, "Wrong mode."),
    UNLINK_FAILED(HttpStatus.INTERNAL_SERVER_ERROR.value(), 1407, "Failed to unlink."),
    NOT_FOUND_USER(HttpStatus.NOT_FOUND.value(), 1408, "Not found email."),
    AUTHENTICATION_FAILED(HttpStatus.INTERNAL_SERVER_ERROR.value(), 1409, "Authentication failed."),
    UNDEFINED_STATUS(HttpStatus.INTERNAL_SERVER_ERROR.value(), 999, "Undefined status occurred"),

    NOT_VALID_TOKEN(HttpStatus.UNAUTHORIZED.value(), 2401, "The token is invalid."),
    SIGNATURE_NOT_MATCH(HttpStatus.UNAUTHORIZED.value(), 2403, "The token signature does not match."),
    TOKEN_TYPE_NOT_MATCH(HttpStatus.UNAUTHORIZED.value(), 2405, "The token type does not match."),
    UNKNOWN_ERROR(HttpStatus.INTERNAL_SERVER_ERROR.value(), 2406, "An unknown error has occurred."),

    // 권한 없는 토큰
    UNAUTHORIZED_TOKEN(HttpStatus.UNAUTHORIZED.value(), 2407, "The token does not have the required permissions."),
    ;

    companion object {
        fun fromCustomCode(code: Int): StatusIfs {
            return entries.firstOrNull { it.getCustomStatusCode() == code } ?: DefaultStatus.UNDEFINED_STATUS
        }
    }

    override fun getHttpStatusCode(): Int {
        return this.httpStatusCode
    }

    override fun getCustomStatusCode(): Int {
        return this.customStatusCode
    }

    override fun getDescription(): String {
        return this.description
    }
}
