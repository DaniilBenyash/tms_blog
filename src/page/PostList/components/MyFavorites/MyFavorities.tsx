import React from "react";

import { usePosts } from "../../../../features/posts";
import { Card } from '../../components/Card/Card';

export const MyFavorites = () => {
    const { posts, onFavoritePost } = usePosts()

    return (
        <div className="my-favorite">
            <h1>MyFavorites</h1>
            {posts?.map(post => {
                return (
                    <div key={post.id}>
                        <button onClick={() => onFavoritePost(post.id)}>{post.id}</button>
                        
                        {post.favorite
                        &&
                        <div>
                            <Card 
                                info={post} 
                                size='postcardMedium'
                                className={{postcard: 'post-card-medium', content: 'post-card-medium__content', imgMedium: 'post-card-medium__img', title: 'title-medium'}}
                            />
                        </div>
                        
                        }
                    </div>
                )
            })}

        </div>
        
    )
}