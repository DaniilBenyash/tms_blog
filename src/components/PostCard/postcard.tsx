import React from "react";
import './css/postcard.css'
import './css/postcardAverage.css'
import './css/postcardSmall.css'
import { LineLike } from '../LineLike/LineLike'

type PostCardProps = {
    size: string,
    postcardName: string,
    postcardText?: string,
    img?: string,
    imgAverage?: string,
}
type Icons = {
    like: string,
    dislike: string,
    bookmark: string,
    more: string,
} 
type PostCard = {
    postcard: string,
    content: string,
    img?: string,
    imgAverage?: string,
    name: string,
}
interface ClassName {
    [postcard: string]: PostCard,

}
export const PostCard = ({size, postcardName, postcardText, img, imgAverage}: PostCardProps) => {

    
    const className: ClassName = {
        postcard: {postcard: 'post-card', content: 'post-card__content', img: 'post-card__img', name: 'post-card__name'},
        postcardAvarage: {postcard: 'post-card-av', content: 'post-card-av__content', imgAverage: 'post-card-av__img', name: 'post-card-av__name'},
        postcardSmall: {postcard: 'post-card-sm',content: 'post-card-sm__content', img: 'post-card-sm__img', name: 'post-card-sm__name'}  ,
    }

    return (
        <div className={className[size].postcard}>

            <div className={className[size].content}>

                {imgAverage && <img src={imgAverage} alt=""  className={className[size].imgAverage}/>}

                <div>
                    
                    <h4 className='post-card__date'>April 20, 2020</h4>

                    <h1 className={className[size].name}>{postcardName}</h1>

                    {postcardText && <p className='post-card__text'>{postcardText}</p>}
                    
                </div>

               {img && <img src={img} alt="" className={className[size].img}/>} 

            </div>
            
            <LineLike />
        </div>
    )
}