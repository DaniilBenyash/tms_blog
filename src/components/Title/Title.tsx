import React from "react";
import './Title.scss';
import { Link } from 'react-router-dom';
import { usePosts } from '../../features/posts/usePosts'

type TitleProps = {
    id: number,
    className: string,
    title: string

}

export const Title = ({id, className, title}: TitleProps) => {
    const { getOnePost } = usePosts();

    return (
        <h1 className={className}>
            <Link to={`/post/${id}`} className={className}>{title}</Link>
        </h1>
        
    )
}