import React from "react";
import './Navigator.scss';
import { ReactComponent as Left} from './icon/left.svg'
import { ReactComponent as Right} from './icon/right.svg'
import { ReactComponent as Next} from './icon/next.svg'

export const Navigator = () => {
    return (
        <div className="navigator">

            <button className="navigator__pointer">
                <Left/>
                <p className="navigator__pointer-text">Prev</p>
            </button>

            <div className="navigator__number">
                <button className="navigator__number-item">
                    1
                </button>
                <button className="navigator__number-item">
                    2
                </button>
                <button className="navigator__number-item">
                    3
                </button>
                <button className="navigator__number-item">
                    <Next/>
                </button>
                <button className="navigator__number-item">
                    6
                </button>
            </div>

            <button className="navigator__pointer">
                <p className="navigator__pointer-text">Next</p>
                <Right/>
            </button>
        </div>
    )
}