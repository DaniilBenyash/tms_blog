import React from "react";
import './Navigator.css';
import { ReactComponent as Left} from './icon/left.svg'
import { ReactComponent as Right} from './icon/right.svg'
import { ReactComponent as Next} from './icon/next.svg'

export const Navigator = () => {
    return (
        <div className="nav-footer">

            <button className="nav-footer__pointer">
                <Left />
                <p className="nav-footer__pointer-text">Prev</p>
            </button>

            <div className="nav-footer__number">
                <button className="nav-footer__number-item">
                    1
                </button>
                <button className="nav-footer__number-item">
                    2
                </button>
                <button className="nav-footer__number-item">
                    3
                </button>
                <button className="nav-footer__number-item">
                    <Next />
                </button>
                <button className="nav-footer__number-item">
                    6
                </button>
            </div>

            <button className="nav-footer__pointer">
                <p className="nav-footer__pointer-text">Next</p>
                <Right />
            </button>
        </div>
    )
}