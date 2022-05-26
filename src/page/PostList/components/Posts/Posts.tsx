import React from "react";
import { Card } from '../Card/Card'

type Post = {
    id: number,
    image: string,
    text: string,
    date: string
    lesson_num: number,
    title: string
    author: number
    like?: boolean
}

type Posts = {
    posts : Post[]
}
export const Posts = ({posts}: Posts) => {
    return (
        
        <div className="post-list__content">

            {posts.map((post, index) => {
                if(index === 0){
                    return (
                        <div key={index} className={`post-list__content-item${index+1}`}>
                            <Card 
                            info={post} 
                            size='postcardBig' 
                            className={{postcard: 'post-card-big', content: 'post-card-big__content', img: 'post-card-big__img', title: 'title-big'}}
                            />
                        </div>
                    )
                }else if(index < 5){
                    return (
                        <div key={index} className={`post-list__content-item${index+1}`}>
                            <Card 
                            info={post} 
                            size='postcardMedium'
                            className={{postcard: 'post-card-medium', content: 'post-card-medium__content', imgMedium: 'post-card-medium__img', title: 'title-medium'}}
                            />
                        </div>
                    )
                }else if(index < 11){
                    return (
                        <div key={index} className={`post-list__content-item${index+1}`}>
                            <Card 
                            info={post} 
                            size='postcardSmall'
                            className={{postcard: 'post-card-small', content: 'post-card-small__content', img: 'post-card-small__img', title: 'title-small'}}
                            />
                        </div>
                    )
                }else{
                    return
                }

            })}

        </div>
    )
}