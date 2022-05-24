import React from "react";
import './MyFavorites.scss'
import { usePosts } from "../../../../features/posts";
import { Card } from '../Card/Card';

export const MyFavorites = () => {
    const { posts, onFavoritePost } = usePosts()

    return (
        <div className="my-favorites">
            {posts?.map(post => {
                return (
                    post.favorite
                    &&
                    <Card 
                        key={post.id}
                        info={post} 
                        size='postcardMedium'
                        className={{postcard: 'post-card-medium', content: 'post-card-medium__content', imgMedium: 'post-card-medium__img', title: 'title-medium'}}
                    />                         
                )
            })}
        </div>    
    )
}