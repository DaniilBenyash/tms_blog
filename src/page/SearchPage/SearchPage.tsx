import React from "react";
import './SearchPage.scss';
import { useAppSelector } from "../../redux/hooks";
import { PostLong } from "../../components/PostLong";

export const SearchPage = () => {

    const posts = useAppSelector(state => state.searchPosts.posts);
    const vulueSearch = useAppSelector(state => state.searchPosts.valueSearch);

    return (
        <div className="search-page">
            <section className="search-page__section">
                <h1 className="search-page__title">Search results "{vulueSearch}"</h1>
                {posts?.results.length === 0
                    ?
                    <p className="search-page__no-found">No posts found</p>
                    :
                    posts?.results.map((post, index) => {
                        return (
                            <PostLong 
                                key={index} 
                                id={post.id} 
                                image={post.image} 
                                text={post.text} 
                                date={post.date} 
                                title={post.title}
                            />
                        )
                    })
                }
            </section>
        </div>
    )
}