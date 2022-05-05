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

export const PostCard = ({size, postcardName, postcardText, img, imgAverage}: PostCardProps) => {

    let className:  {[item: string]: string}

    if(size === 'postcard'){

        className = {postcard: 'post-card', content: 'post-card__content', img: 'post-card__img', name: 'post-card__name'}

    }else if(size === 'postcardAverage'){

        className = {postcard: 'post-card-av', content: 'post-card-av__content', imgAverage: 'post-card-av__img', name: 'post-card-av__name'}

    }else if(size === 'postcardSmall'){

        className = {postcard: 'post-card-sm',content: 'post-card-sm__content', img: 'post-card-sm__img', name: 'post-card-sm__name'}  

    }else{
        return <h1>Неверный тип</h1>
    }   
    
    return (
        <div className={className.postcard}>

            <div className={className.content}>

                {imgAverage && <img src={imgAverage} alt=""  className={className.imgAverage}/>}

                <div>
                    
                    <h4 className='post-card__date'>April 20, 2020</h4>

                    <h1 className={className.name}>{postcardName}</h1>

                    {size === 'postcard' && <p className='post-card__text'>{postcardText}</p>}
                    
                </div>

               {img && <img src={img} alt="" className={className.img}/>} 

            </div>
            
            <LineLike />
        </div>
    )
}