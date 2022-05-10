import React from "react";
import './Title.scss'

type TitleProps = {
    className: string,
    title: string
}

export const Title = ({className, title}: TitleProps) => {
    return (
        <h1 className={className}>{title}</h1>
    )
}