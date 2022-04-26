import React, { useState } from "react";
import LikePD from './icons/like.svg'
import DislikePD from './icons/dislike.svg'
import BookmarkPD from './icons/bookmark.svg'
import MorePD from './icons/more.svg'
import './linelike.css'

export const LineLike = () => {
    const [likeValue, setLikeValue] = useState(0)
    const [dislikeValue, setDislikeValue] = useState(0)

    return (
        <div className='pdbutton'>

                <div className='like'>

                    <button onClick={() => setLikeValue(likeValue + 1)}>
                        <img src={LikePD} alt=""/>
                    </button>
                    <p>{likeValue}</p>

                    <button onClick={() => setDislikeValue(dislikeValue + 1)}>
                        <img src={DislikePD} alt="" />
                    </button>
                    <p>{dislikeValue}</p>

                </div>

                <div className='buttonRight'>

                    <button className='marginButton' onClick={(event) => console.log()}>
                        <img src={BookmarkPD} alt="" />
                    </button>

                    <button>
                        <img src={MorePD} alt="" />
                    </button>

                </div>
            </div>
    )
}