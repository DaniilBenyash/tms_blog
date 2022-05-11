import React, { useState } from "react";
import { ReactComponent as LikePD} from './icon/like.svg'
import { ReactComponent as DislikePD} from './icon/dislike.svg'
import { ReactComponent as Bookmark } from './icon/bookmark.svg';
import { ReactComponent as MorePD} from './icon/more.svg'
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

                    <button onClick={() => {addLikeOrDislike(setLikeValue, likeValue)}} className='line-like__button_style'>
                        <LikePD />
                    </button>

                    <p className="line-like__number">{likeValue > 0 && likeValue}</p>

                    <button onClick={() => {addLikeOrDislike(setDislikeValue, dislikeValue)}} className='line-like__button_style'>
                        <DislikePD  />
                    </button>

                    <p className="line-like__number">{dislikeValue > 0 && dislikeValue}</p> 

                </div>
 
                <div className='line-like__right-button'>

                    <button className='line-like__button_style line-like__bookmark_margin' onClick={() => {setBookValue(bookValue ? false : true)}}>
                        <Bookmark className={`${bookValue && 'line-like__bookmark_active'}`}/>
                    </button>

                    <button className='line-like__button_style'>
                        <MorePD  />
                    </button>

                </div>
            </div>
    )
}