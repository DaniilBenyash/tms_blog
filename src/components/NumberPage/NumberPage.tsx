import React, { ReactElement } from "react";
import './NumberPage.scss'

type NumberPageProps = {
    numberPage: number | ReactElement,
}

export const NumberPage = ({numberPage}: NumberPageProps) => {
    return (
        <button className="number-page">
            {numberPage}
        </button>
    )
}