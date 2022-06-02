import React from "react";
import './PostList.scss'
import { NavigationMenu } from './components/NavigationMenu/NavigationMenu'
import { Posts } from './components/Posts/Posts'
import { useAppSelector } from '../../redux/hooks';
import { MyFavorites } from './components/MyFavorites/MyFavorites'
import { Popular } from './components/Popular/Popular'
import { usePosts } from "../../features/posts";
import { Navigator } from "./components/Navigator/Navigator";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const PostList = () => {

    const { posts } = usePosts()

    const tab = useAppSelector(state => state.tab.value);

    return (
        <div className="post-list">
            <Header/>
            <div className="post-list__section">

                <h1 className="post-list__h1">Blog</h1>
                
                < NavigationMenu />

                {tab === 'all' && posts
                &&     
                < Posts posts={posts}/>}

                {tab === 'favorites'
                &&
                <MyFavorites/>}

                {tab === 'popular'
                &&
                <Popular/>}

                <Navigator/>
                <Footer/>
            </div>
        </div>
    )
}