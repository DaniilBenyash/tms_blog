import React from "react";
import './css/postcard.css'
import './css/postcardAverage.css'
import './css/postcardSmall.css'
import { LineLike } from '../LineLike/lineLike'

type PostCard = {
    postcard: string,
    content: string,
    img?: string,
    imgAverage?: string,
    name: string,
}
type PostCardProps = {
    size: string,
    postcardName: string,
    postcardText?: string,
    img?: string,
    className: PostCard,
}

export const PostCard = ({size, postcardName, postcardText, img, className}: PostCardProps) => {

    return (
        <div className={className.postcard}>

            <div className={className.content}>

                {size === 'postcardAvarage' && <img src={img} alt=""  className={className.imgAverage}/>}

                <div>
                    
                    <h4 className='post-card__date'>April 20, 2020</h4>

                    <h1 className={className.name}>{postcardName}</h1>

                    {size === 'postcard' && <p className='post-card__text'>{postcardText}</p>}
                    
                </div>

               {size !== 'postcardAvarage' && <img src={img} alt="" className={className.img}/>} 

            </div>
            
            <LineLike />
        </div>
    )
}