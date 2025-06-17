package org.rookedsysc.mediumclone.common

class PageResponse<T>(
    val page: Int,
    val size: Int,
    val elements: List<T>,
) {
}
