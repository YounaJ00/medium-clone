package org.rookedsysc.mediumclone.search

import io.swagger.v3.oas.annotations.media.Schema

@Schema(description = "검색 응답 데이터")
data class SearchResponse(
    @Schema(description = "ID", example = "1")
    val id: Long,

    @Schema(description = "검색 결과 타입", example = "USER")
    val type: SearchResultType,

    @Schema(description = "검색 키워드", example = "example keyword")
    val keyword: String,
)
