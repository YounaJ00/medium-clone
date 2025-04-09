package org.rookedsysc.mediumclone.common.utils

import java.time.Duration
import java.time.LocalDateTime

class DateTimeUtils {
    companion object {
        fun timeAgo(inputTime: LocalDateTime): String {
            val now = LocalDateTime.now()
            val duration = Duration.between(inputTime, now)

            return when {
                duration.seconds < 60 -> "${duration.seconds} seconds ago"
                duration.toMinutes() < 60 -> "${duration.toMinutes()} minutes ago"
                duration.toHours() < 24 -> "${duration.toHours()} hours ago"
                duration.toDays() < 30 -> "${duration.toDays()} days ago"
                duration.toDays() < 365 -> "${duration.toDays() / 30} months ago"
                else -> "${duration.toDays() / 365} years ago"
            }
        }
    }
}
