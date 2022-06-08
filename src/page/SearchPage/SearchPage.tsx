import React, { useEffect, useState } from "react";
import './SearchPage.scss';
import { IPost } from '../../features/posts/postsSlice'
import { useAppSelector } from "../../redux/hooks";
import { Header } from "../../components/Header";

export const SearchPage = () => {

    const posts = useAppSelector(state => state.filterPosts.posts);


    

    return (
        <div className="search-page">
            <Header></Header>
            <section className="search-page__section">
                <h1>Search</h1>
                <div>
                    {posts?.results.map((el, id, arr) => {
                       return (
                           <div key={id}>{el.title}</div>
                       )
                    })}
                </div>
            </section>
        </div>
    )
}