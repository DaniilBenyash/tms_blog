import React from "react";
import './PostList.scss'
import { NavigationMenu } from "./components/NavigationMenu";
import { Posts } from './components/Posts/Posts'
import { useAppSelector } from '../../redux/hooks';
import { MyFavorites } from './components/MyFavorites/MyFavorites'
import { Popular } from './components/Popular/Popular'
import { usePosts } from "../../features/getPosts";

import { Footer } from "../../components/Footer";

export const PostList = () => {

    const { posts } = usePosts()

    const tab = useAppSelector(state => state.tab.value);

    return (
        <div className="post-list">

            <div className="post-list__section">

                <h1 className="post-list__h1">Blog</h1>
                
                < NavigationMenu />

                {tab === 'all' && posts
                &&     
                < Posts/>}

                {tab === 'favorites'
                &&
                <MyFavorites/>}

                {tab === 'popular'
                &&
                <Popular/>}

                <Footer/>
            </div>
        </div>
    )
}