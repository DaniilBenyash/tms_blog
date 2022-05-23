import React from "react";
import './Title.scss'
import { Link } from 'react-router-dom'

type TitleProps = {
    id: number,
    className: string,
    title: string
}

export const Title = ({id, className, title}: TitleProps) => {
    return (
        <h1 className={className}>
            <Link to={`/post/${id}`} className={className}>{title}</Link>
        </h1>
        
    )
}