import React, { ReactElement, useEffect, useState } from "react";
import './PostList.scss'
import { NavigationMenu } from './components/NavigationMenu/NavigationMenu'
import { Posts } from './components/Posts/Posts'
import { useAppSelector } from '../../redux/hooks';
import { MyFavorites } from './components/MyFavorites/MyFavorites'
import { Popular } from './components/Popular/Popular'
import { postsData } from "../../redux/postsData";

export const PostList = () => {

    const tab = useAppSelector(state => state.tab.value);

    return (
        <div className="post-list">
            <div className="post-list__section">

                <h1 className="post-list__h1">Blog</h1>
                
                < NavigationMenu />

                {tab === 'all' 
                &&     
                < Posts posts={postsData}/>}

                {tab === 'favorites'
                &&
                <MyFavorites/>}

                {tab === 'popular'
                &&
                <Popular/>}
            </div>
        </div>
    )
}