import React from "react";
import './NamePage.scss';
import { Link} from 'react-router-dom';

type NamePageProps = {
    namePage: string
}

export const NamePage = ({namePage}: NamePageProps) => {
    return (
        <div className="name-page">
            <Link to='/' className="name-page__button-back">Back to home</Link>
            <h1 className="name-page__name">{namePage}</h1>
        </div>
    )
}