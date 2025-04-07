package org.rookedsysc.mediumclone.search

import org.rookedsysc.mediumclone.post.Post
import org.rookedsysc.mediumclone.post.PostRepository
import org.rookedsysc.mediumclone.tag.Tag
import org.rookedsysc.mediumclone.tag.TagRepository
import org.rookedsysc.mediumclo햣 r
import org.rookedsysc.mediumclone.user.UserRepository
import org.springframework.stereotype.Service

@Service
class SearchService(
    private val userRepository: UserRepository,
    private val postRepository: PostRepository,
    private val tagRepository: TagRepository,
) {

    fun search(keyword: String): List<SearchResponse> {
        val users: List<User> = userRepository.searchByEmailLikeOrNameLike(keyword, keyword)
        val posts: List<Post> = postRepository.searchPostByTitleLikeOrContentLike(keyword, keyword)
        val tags: List<Tag> = tagRepository.searchTagsByNameLike(keyword)

        val results: MutableList<SearchResponse> = mutableListOf()

        users.forEach { user ->
            results.add(SearchResponse(id = user.id, type = SearchResultType.USER, keyword = user.name))
        }

        posts.forEach { post ->
            results.add(SearchResponse(id = post.id, type = SearchResultType.POST, keyword = post.title))
        }

        tags.forEach { tag ->
            results.add(SearchResponse(id = tag.id, type = SearchResultType.TAG, keyword = tag.name))
        }

        return results
    }
}
