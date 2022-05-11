import React from "react";
import './PostCard.scss'
import { LineLike } from '../LineLike/LineLike'
import { Date } from '../Date/Date'
import { Title } from '../Title/Title'

type PostCard = {
    postcard: string,
    content: string,
    img?: string,
    imgMedium?: string,
    title: string,
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

                {size === 'postcardMedium' && <img src={img} alt=""  className={className.imgMedium}/>}

                <div>
                    
                    < Date date='April 20, 2020'/>

                    < Title className={className.title} title={postcardName}/>

                    {size === 'postcardBig' && <p className='post-card-big__text'>{postcardText}</p>}
                    
                </div>

               {size !== 'postcardMedium' && <img src={img} alt="" className={className.img}/>} 

            </div>
            
            <LineLike />
        </div>
    )
}