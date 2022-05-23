import React, { useEffect } from "react";
import './PostCardd.scss'
import { LineLike } from '../LineLike/LineLike'
import { Date } from '../Date/Date'
import { Title } from '../../../../components/Title/Title'

type PostCard = {
    postcard: string,
    content: string,
    img?: string,
    imgMedium?: string,
    title: string,
}
type PostCardProps = {
    id: number,
    image?: string,
    text?: string,
    date: string
    lesson_num?: number,
    title: string
    author?: number
    size: string,
    className: PostCard,
    like?: boolean
}

export const PostCard = ({id, image, text, date, lesson_num, title, author, size, className, like}: PostCardProps) => {
    
    return (
        <div className={className.postcard}>

            <div className={className.content}>

                {size === 'postcardMedium' && <img src={image} alt=""  className={className.imgMedium}/>}
                
                {size !== 'postcardMedium' && <img src={image} alt="" className={`post-card__img_display`}/>} 

                <div>
                    
                    < Date date={date}/>

                    < Title className={className.title} title={title}/>

                    {size === 'postcardBig' && <p className='post-card-big__text'>{text}</p>}
                    
                </div>

               {size !== 'postcardMedium' && <img src={image} alt="" className={className.img}/>} 

            </div>
            
            <LineLike postId={id}/>
        </div>
    )
}