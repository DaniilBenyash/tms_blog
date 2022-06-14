import React, { ReactElement } from "react";
import './NumberPage.scss'

type NumberPageProps = {
    numberPage: number | ReactElement,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export const NumberPage = ({numberPage, onClick}: NumberPageProps) => {
    return (
        <button className="number-page" onClick={onClick}>
            {numberPage}
        </button>
    )
}