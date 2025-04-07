package org.rookedsysc.mediumclone.post

import org.rookedsysc.mediumclone.tag.TagResponse

data class PostResponse(
    val id: Long,
    val userId: Long,
    val title: String,
    val content: String,
    val tags: List<TagResponse>,
) {}
