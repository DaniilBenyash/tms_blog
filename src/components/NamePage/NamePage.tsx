import React from "react";
import './NamePage.scss'

type NamePageProps = {
    namePage: string
}

export const NamePage = ({namePage}: NamePageProps) => {
    return (
        <div className="name-page">
            <a href="" className="name-page__button-back">Back to home</a>
            <h1 className="name-page__name">{namePage}</h1>
        </div>
    )
}