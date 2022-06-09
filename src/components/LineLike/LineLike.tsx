import React from "react";
import { ReactComponent as Like} from './icon/like.svg'
import { ReactComponent as Dislike} from './icon/dislike.svg'
import { ReactComponent as Bookmark } from './icon/bookmark.svg';
import { ReactComponent as More} from './icon/more.svg'
import { ReactComponent as BookmarkTrue } from './icon/Bookmark-True.svg'
import { ReactComponent as LikeTrue} from './icon/like-true.svg'
import { ReactComponent as DislikeTrue} from './icon/dislike-true.svg'
import { Button } from "../Button";
import { usePosts } from "../../features/getPosts";
import './LineLike.scss';

type LineLikeProps = {
    postId: number

}
export const LineLike = ({postId}: LineLikeProps) => {
    
    const { getInfoOnePost, onLikePost, onDislikePost, onFavoritePost } = usePosts()
    const idForInfoPost = postId;
    const infoPost = getInfoOnePost(idForInfoPost); 

    return (
        <div className='line-like'>
                <div className='line-like__left-button'>
                    <Button 
                        onClick={() => onLikePost(postId)} 
                        className='button--line-like' 
                        disabled={false} 
                        icon={infoPost?.like ? <LikeTrue/> : <Like/>}
                    />
                    <Button 
                        onClick={() => onDislikePost(postId)}
                        className='button--line-like' 
                        disabled={false} 
                        icon={infoPost?.like === false ? <DislikeTrue/> : <Dislike/>}
                    />
                </div>
                <div className='line-like__right-button'>
                    <Button 
                        onClick={() => onFavoritePost(postId)} 
                        className='button--line-like button--line-like-margin' 
                        disabled={false} 
                        icon={infoPost?.favorite ? <BookmarkTrue/> : <Bookmark/>}
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