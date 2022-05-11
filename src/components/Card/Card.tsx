import React from "react";
import { PostCard } from '../PostCard/PostCard'

type Post = {
    postcardName: string,
    postcardText: string,
    img: string,
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
            size={size} 
            postcardName={info.postcardName}
            postcardText={info.postcardText}
            img={info.img}
            className={className}
        /> 
    )
}
