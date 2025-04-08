package org.rookedsysc.mediumclone.tag

import io.swagger.v3.oas.annotations.Operation
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@io.swagger.v3.oas.annotations.tags.Tag(name = "Tag API", description = "Tag 관련 API")
@RestController
@RequestMapping("/api/tags")
class TagController(
    private val tagService: TagService,
) {
    @Operation(summary = "Recommended Topics API")
    @GetMapping
    fun findTop5TagsByPostCount(): List<String> {
        return tagService.findTop5TagsByPostCount()
    }
}
