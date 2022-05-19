import React from "react";
import { PostCard } from '../PostCard/PostCardd'

type Post = {
    id?: number,
    image?: string,
    text?: string,
    date: string
    lesson_num?: number,
    title: string
    author?: number
}

type PostCardClass = {
    postcard: string,
    content: string,
    img?: string,
    imgMedium?: string,
    title: string,
}

type Card = {
    info: Post,
    size: string,
    className: PostCardClass
}

export const Card = ({info, size, className}: Card) => {
    return (
        <PostCard 
            id={info.id}
            image={info.image}
            text={info.text}
            date={info.date}
            lesson_num={info.lesson_num}
            title={info.title}
            author={info.author}
            size={size}
            className={className}
        /> 
    )
}
