package org.rookedsysc.mediumclone.common.utils

import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.util.SerializationUtils
import java.util.Base64

class CookieUtils {
    companion object {
        fun getCookie(
            request: HttpServletRequest,
            name: String,
        ): Cookie? {
            val cookies = request.cookies
            cookies?.let {
                for (cookie in cookies) {
                    if (cookie.name == name) {
                        return cookie
                    }
                }
            }
            return null
        }

        fun addCookie(
            response: HttpServletResponse,
            name: String,
            value: String,
            maxAge: Int,
        ) {
            val cookie = Cookie(name, value)
            cookie.path = "/"
            cookie.isHttpOnly = true
            cookie.maxAge = maxAge
            response.addCookie(cookie)
        }

        fun deleteCookie(
            request: HttpServletRequest,
            response: HttpServletResponse,
            name: String,
        ) {
            val cookies = request.cookies
            cookies?.let {
                for (cookie in cookies) {
                    if (cookie.name == name) {
                        cookie.value = ""
                        cookie.path = "/"
                        cookie.maxAge = 0
                        response.addCookie(cookie)
                    }
                }
            }
        }

        fun serialize(`object`: Any): String {
            return Base64.getUrlEncoder()
                .encodeToString(SerializationUtils.serialize(`object`))
        }

        fun <T> deserialize(
            cookie: Cookie,
            cls: Class<T>,
        ): T {
            @Suppress("UNCHECKED_CAST")
            return cls.cast(
                SerializationUtils.deserialize(
                    Base64.getUrlDecoder()
                        .decode(cookie.value),
                ),
            )
        }
    }
}
