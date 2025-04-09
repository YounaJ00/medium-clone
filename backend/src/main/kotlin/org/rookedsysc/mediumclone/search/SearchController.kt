package org.rookedsysc.mediumclone.search

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.Parameter
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@io.swagger.v3.oas.annotations.tags.Tag(name = "Search API", description = "검색 API")
@RestController
@RequestMapping("/api/search")
class SearchController(
    private val searchService: SearchService,
) {

    @GetMapping
    @Operation(summary = "키워드를 사용하여 사용자, 게시물 및 태그를 검색")
    fun search(
        @Parameter(description = "검색 키워드", example = "example keyword")
        @RequestParam(value = "keyword") keyword: String
    ): List<SearchResponse> {
        return searchService.search(keyword)
    }
}
