import React from "react";
import './Navigator.scss';
import { ReactComponent as Left} from './icon/left.svg'
import { ReactComponent as Right} from './icon/right.svg'
import { ReactComponent as Next} from './icon/next.svg'
import { NumberPage } from '../NumberPage/NumberPage'

export const Navigator = () => {
    return (
        <div className="navigator">
            <button className="navigator__pointer">
                <Left/>
                <p className="navigator__pointer-text">Prev</p>
            </button>
            <div className="navigator__number">
                <NumberPage numberPage={1}/>
                <NumberPage numberPage={2}/>
                <NumberPage numberPage={3}/>
                <NumberPage numberPage={<Next/>}/>
                <NumberPage numberPage={6}/>
            </div>
            <button className="navigator__pointer">
                <p className="navigator__pointer-text">Next</p>
                <Right/>
            </button>
        </div>
    )
}