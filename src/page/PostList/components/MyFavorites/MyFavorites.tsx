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
                    <div key={post.id}>
                        {post.favorite
                        &&
                        <div>
                            <Card 
                                info={post} 
                                size='postcardMedium'
                                className={{postcard: 'post-card-favorites', content: 'post-card-favorites__content', imgMedium: 'post-card-favorites__img', title: 'title-favorites'}}
                            />
                        </div>                       
                        }
                    </div>
                )
            })}
        </div>    
    )
}