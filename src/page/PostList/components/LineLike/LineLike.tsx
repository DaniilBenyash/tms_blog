import React, { useEffect, useState } from "react";
import { ReactComponent as Like} from './icon/like.svg'
import { ReactComponent as Dislike} from './icon/dislike.svg'
import { ReactComponent as Bookmark } from './icon/bookmark.svg';
import { ReactComponent as More} from './icon/more.svg'
import { ReactComponent as BookmarkTrue } from './icon/Bookmark-True.svg'
import { ReactComponent as LikeTrue} from './icon/like-true.svg'
import { ReactComponent as DislikeTrue} from './icon/dislike-true.svg'
import { Button } from "../../../../components/Button";
import { usePosts } from "../../../../features/posts";
import './LineLike.scss';

type LineLikeProps = {
    postId: number

}
export const LineLike = ({postId}: LineLikeProps) => {
    
    const { posts, onLikePost, onDislikePost, onFavoritePost } = usePosts()

    return (
        <div className='line-like'>
                <div className='line-like__left-button'>
                    <Button 
                        onClick={() => onLikePost(postId)} 
                        className='button--line-like' 
                        disabled={false} 
                        icon={posts?.[postId-1].like ? <LikeTrue/> : <Like/>}
                    />
                    <p className="line-like__number">{posts?.[postId-1].like && String(posts?.[postId-1].like)}</p>
                    <Button 
                        onClick={() => onDislikePost(postId)}
                        className='button--line-like' 
                        disabled={false} 
                        icon={posts?.[postId-1].like === false ? <DislikeTrue/> : <Dislike/>}
                    />
                    <p className="line-like__number">{posts?.[postId-1].like === false && String(posts?.[postId-1].like)}</p> 
                </div>
                <div className='line-like__right-button'>
                    <Button 
                        onClick={() => onFavoritePost(postId)} 
                        className='button--line-like button--line-like-margin' 
                        disabled={false} 
                        icon={posts?.[postId-1].favorite ? <BookmarkTrue/> : <Bookmark/>}
                    />
                    <Button  
                        className='button--line-like' 
                        disabled={false} 
                        icon={<More/>}
                    />
                </div>
            </div>
    )
}