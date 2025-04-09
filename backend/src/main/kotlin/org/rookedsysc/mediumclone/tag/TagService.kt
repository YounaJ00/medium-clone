package org.rookedsysc.mediumclone.tag

import org.springframework.stereotype.Service

@Service
class TagService(
    private val tagRepository: TagRepository,
) {
    fun findTop5TagsByPostCount(): List<String> {
        return tagRepository.findTop5TagsByPostCount().map { it.name }
    }
}
