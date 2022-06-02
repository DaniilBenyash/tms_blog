import React from "react";
import './PostCardd.scss'
import { LineLike } from '../LineLike/LineLike'
import { Date } from '../Date/Date'
import { Title } from '../../../../components/Title/Title'
import { Link } from 'react-router-dom';
import { usePosts } from '../../../../features/posts/usePosts';


type PostCard = {
    postcard: string,
    content: string,
    img?: string,
    imgMedium?: string,
    title: string,
}
type PostCardProps = {
    id: number,
    image: string,
    text: string,
    date: string
    lesson_num?: number,
    title: string
    author?: number
    size: string,
    className: PostCard,
    like?: boolean
}

export const PostCard = ({id, image, text, date, lesson_num, title, author, size, className, like}: PostCardProps) => {
    
    const { getOnePost } = usePosts();

    return (
        <div className={className.postcard}>
            <div className={className.content}>

                {size === 'postcardMedium' 
                && 
                <Link to={`/post/${id}`}>
                    <img src={image} alt=""  className={className.imgMedium}/>
                </Link>}

                {size !== 'postcardMedium' 
                && 
                <img src={image} alt="" className={`post-card__img_display`}/>} 

                <div>  
                    < Date date={date}/>
                    < Title 
                        id={id} 
                        className={className.title} 
                        title={title}
                    />

                    {size === 'postcardBig' 
                    && 
                    <p className='post-card-big__text'>{text}</p>
                    }

                </div>

                {size !== 'postcardMedium' 
                && 
                <Link to={`/post/${id}`}>
                   <img src={image} alt="" className={className.img}/>
                </Link>} 

            </div>            
            <LineLike postId={id}/>
        </div>
    )
}