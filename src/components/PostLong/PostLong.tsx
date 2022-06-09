import React from "react";
import './PostLong.scss'
import { Link } from "react-router-dom";
import { LineLike } from '../LineLike'
import { Date } from '../Date'
import { Title } from '../Title'

type PostLongProps = {
    id: number,
    image: string,
    text: string,
    date: string
    title: string
}

export const PostLong = ({id, image, text, date, title}: PostLongProps) => {
    return (
        <div className="post-long">
            <div className="post-long__section">
                <Link to={`/post/${id}`}>
                    <img src={image} alt="" className='post-long__image'/>
                </Link>
                <div>
                    <Date date={date}/>
                    <Title 
                        id={id} 
                        className='title-small'
                        title={title}
                    />
                </div>
            </div>
            <LineLike postId={id}/>
        </div>
    )
}