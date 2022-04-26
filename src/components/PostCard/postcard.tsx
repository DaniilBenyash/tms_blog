import React from "react";
import './css/postcard.css'
import './css/postcardBig.css'
import './css/postcardSmall.css'
import { LineLike } from '../LineLike/lineLike'

type PostCardProps = {
    type: string,
    pdname: string,
    content?: string,
    img?: string,
    imgBig?: string,
}
type Icons = {
    like: string,
    dislike: string,
    bookmark: string,
    more: string,
}

let className:  {[item: string]: string}

export const PostCard = ({type, pdname, content, img, imgBig}: PostCardProps) => {
    
    if(type === 'pd') className = {postcard: 'postcard', content: 'content', pdname: 'pdname', pdleftcontent: 'pdleftcontent', date: 'date', contentText: 'contentText', img: 'imgPD' }
    if(type === 'pdBig') className = {postcard: 'postcardBig', content: 'contentBig', pdname: 'pdnameBig', pdleftcontent: 'pdleftcontentBig', date: 'date', contentText: 'contentText', imgBig: 'imgBig'}
    if(type === 'pdSmall') className = {postcard: 'postcardSmall', content: 'content', pdname: 'pdnameSmall', pdleftcontent: 'pdleftcontent',date: 'date', contentText: 'contentText', img: 'imgSmall' }
    
    return (
        <div className={className.postcard}>

            <div className={className.content}>

                {imgBig && <img src={imgBig} alt=""  className={className.imgBig}/>}

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