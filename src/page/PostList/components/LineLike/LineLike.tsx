import React, { useEffect, useState } from "react";
import { ReactComponent as LikePD} from './icon/like.svg'
import { ReactComponent as DislikePD} from './icon/dislike.svg'
import { ReactComponent as Bookmark } from './icon/bookmark.svg';
import { ReactComponent as MorePD} from './icon/more.svg'
import { Button } from "../../../../components/Button";
import { usePosts } from "../../../../features/posts";
import './LineLike.scss';
import { postsData } from "../../../../redux/postsData";

type LineLikeProps = {
    postId: number

}
export const LineLike = ({postId}: LineLikeProps) => {
    
    const { posts, onLikePost, onDislikePost, onFavoritePost } = usePosts()
 
    const [bookValue, setBookValue] = useState(false)


    return (
        <div className='line-like'>
                <div className='line-like__left-button'>
                    <Button 
                        onClick={() => {onLikePost(postId)}} 
                        className='button--line-like' 
                        disabled={false} 
                        icon={<LikePD/>}
                    />
                    <p className="line-like__number">{posts?.[postId-1].like && String(posts?.[postId-1].like)}</p>
                    <Button 
                        onClick={() => {onDislikePost(postId)}}
                        className='button--line-like' 
                        disabled={false} 
                        icon={<DislikePD/>}
                    />
                    <p className="line-like__number">{posts?.[postId-1].like === false && String(posts?.[postId-1].like)}</p> 
                </div>
                <div className='line-like__right-button'>
                    <Button 
                        onClick={() => {onFavoritePost(postId)}} 
                        className='button--line-like button--line-like-margin' 
                        disabled={false} 
                        icon={<Bookmark className={`${posts?.[postId-1].favorite && 'line-like__bookmark_active'}`}/>}
                    />
                    <Button  
                        className='button--line-like' 
                        disabled={false} 
                        icon={<MorePD/>}
                    />
                </div>
            </div>
    )
}