import React, { useState } from "react";
import LikePD from './icon/like.svg'
import DislikePD from './icon/dislike.svg'
import { ReactComponent as Bookmark } from './icon/bookmark.svg';
import MorePD from './icon/more.svg'
import './LineLike.css'

export const LineLike = () => {
    
    const [likeValue, setLikeValue] = useState(0)
    const [likeBoolValue, setLikeBoolValue] = useState(false)

    const [dislikeValue, setDislikeValue] = useState(0)
    const [dislikeBollValue, setDislikeBoolValue] = useState(false)
    
    const [bookValue, setBookValue] = useState(false)

    function addLikeOrDislike(set1: any, set2: any, value1: number, value2: boolean): void{
        if(!value2){
            set1(value1 + 1);
            set2(true);
        }else{
            set1(value1 - 1);
            set2(false);
        }
    }
    return (
        <div className='line-like'>

                <div className='line-like__left-button'>

                    <button onClick={() => {addLikeOrDislike(setLikeValue, setLikeBoolValue, likeValue, likeBoolValue)}} className='line-like__button_style'>
                        <img src={LikePD} alt=""/>
                    </button>

                    <p className="line-like__number">{likeValue > 0 && likeValue}</p>

                    <button onClick={() => {addLikeOrDislike(setDislikeValue, setDislikeBoolValue, dislikeValue, dislikeBollValue)}} className='line-like__button_style'>
                        <img src={DislikePD} alt="" />
                    </button>

                    <p className="line-like__number">{dislikeValue > 0 && dislikeValue}</p> 

                </div>
 
                <div className='line-like__right-button'>

                    <button className='line-like__button_style line-like__bookmark_margin' onClick={() => {setBookValue(bookValue ? false : true)}}>
                        <Bookmark className={`${bookValue && 'line-like__bookmark_active'}`}/>
                    </button>

                    <button className='line-like__button_style'>
                        <img src={MorePD} alt="" />
                    </button>

                </div>
            </div>
    )
}