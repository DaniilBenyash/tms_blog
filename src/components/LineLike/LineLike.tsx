import React, { useState } from "react";
import { ReactComponent as LikePD} from './icon/like.svg'
import { ReactComponent as DislikePD} from './icon/dislike.svg'
import { ReactComponent as Bookmark } from './icon/bookmark.svg';
import { ReactComponent as MorePD} from './icon/more.svg'
import { Button } from "../Button";
import './LineLike.scss'

export const LineLike = () => {
    
    const [likeValue, setLikeValue] = useState(0)

    const [dislikeValue, setDislikeValue] = useState(0)
 
    const [bookValue, setBookValue] = useState(false)

    function addLikeOrDislike(set: any, value: any): void{
        setLikeValue(0)
        setDislikeValue(0)
        if(value !== 0) {
            set(0)
        }else {
            set(1)
        }
        
    }
    return (
        <div className='line-like'>
                <div className='line-like__left-button'>
                    <Button 
                        onClick={() => {addLikeOrDislike(setLikeValue, likeValue)}} 
                        className='button--line-like' 
                        disabled={false} 
                        icon={<LikePD/>}
                    />
                    <p className="line-like__number">{likeValue > 0 && likeValue}</p>
                    <Button 
                        onClick={() => {addLikeOrDislike(setDislikeValue, dislikeValue)}} 
                        className='button--line-like' 
                        disabled={false} 
                        icon={<DislikePD/>}
                    />
                    <p className="line-like__number">{dislikeValue > 0 && dislikeValue}</p> 
                </div>
                <div className='line-like__right-button'>
                    <Button 
                        onClick={() => {setBookValue(bookValue ? false : true)}} 
                        className='button--line-like button--line-like-margin' 
                        disabled={false} 
                        icon={<Bookmark className={`${bookValue && 'line-like__bookmark_active'}`}/>}
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