import React, { useState } from "react";
import LikePD from './icons/like.svg'
import DislikePD from './icons/dislike.svg'
import { ReactComponent as Bookmark } from './icons/bookmark.svg';
import MorePD from './icons/more.svg'
import './linelike.css'

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
        <div className='pdbutton'>

                <div className='like'>

                    <button onClick={() => {addLikeOrDislike(setLikeValue, setLikeBoolValue, likeValue, likeBoolValue)}}>
                        <img src={LikePD} alt=""/>
                    </button>
                    <p>{likeValue > 0 && likeValue}</p>

                    <button onClick={() => {addLikeOrDislike(setDislikeValue, setDislikeBoolValue, dislikeValue, dislikeBollValue)}}>
                        <img src={DislikePD} alt="" />
                    </button>
                    <p>{dislikeValue > 0 && dislikeValue}</p> 

                </div>
 
                <div className='buttonRight'>

                    <button className='marginButton' onClick={() => {setBookValue(bookValue ? false : true)}}>
                        <Bookmark className={`${bookValue && 'bookTrue'}`}/>
                    </button>

                    <button>
                        <img src={MorePD} alt="" />
                    </button>

                </div>
            </div>
    )
}