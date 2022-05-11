import React from "react";
import { Card } from '../Card/Card'


type Post = {
    postcardName: string,
    postcardText: string,
    img: string,
}

type Posts = {
    posts : Post[]
}
export const Posts = ({posts}: Posts) => {
    return (
        
        <div className="post-list__content">

            {posts.map((post, id) => {

                if(id === 0){
                    return (
                        <div key={id} className={`post-list__content-item${id+1}`}>
                            <Card 
                            info={post} 
                            size='postcardBig' 
                            className={{postcard: 'post-card-big', content: 'post-card-big__content', img: 'post-card-big__img', title: 'title-big'}}
                            />
                        </div>
                    )
                }else if(id < 5){
                    return (
                        <div key={id} className={`post-list__content-item${id+1}`}>
                            <Card 
                            info={post} 
                            size='postcardMedium'
                            className={{postcard: 'post-card-medium', content: 'post-card-medium__content', imgMedium: 'post-card-medium__img', title: 'title-medium'}}
                            />
                        </div>
                    )
                }else if(id < 11){
                    return (
                        <div key={id} className={`post-list__content-item${id+1}`}>
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