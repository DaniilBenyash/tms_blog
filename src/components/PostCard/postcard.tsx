import React from "react";
import './css/postcard.css'
import './css/postcardSmall.css'
import './css/postcardMob.css'
import { LineLike } from '../LineLike/lineLike'

type PostCardProps = {
    className: ClassName,
    pdname: string,
    content?: string,
    img?: string,
    imgSmall?: string,
}
type ClassName = {
   [item: string]: string
}
type Icons = {
    like: string,
    dislike: string,
    bookmark: string,
    more: string,
}

export const PostCard = ({className, pdname, content, img, imgSmall}: PostCardProps) => {
    return (
        <div className={className.postcard}>

            <div className={className.content}>
                {imgSmall && <img src={imgSmall} alt=""  className={className.imgSmall}/>}
                <div className={className.pdleftcontent}>

                    <h4 className={className.date}>April 20, 2020</h4>
                    <h1 className={className.pdname}>{pdname}</h1>
                    <p className={className.contentText}>{content}</p>
                </div>

               {img && <img src={img} alt="" className={className.img}/>} 

            </div>
            
            <LineLike />
        </div>
    )
}