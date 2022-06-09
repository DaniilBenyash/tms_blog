import React, { useEffect, useState } from "react";
import './Navigator.scss';
import { ReactComponent as Left} from './icon/left.svg'
import { ReactComponent as Right} from './icon/right.svg'
import { ReactComponent as Next} from './icon/next.svg'
import { NumberPage } from './components/NumberPage/NumberPage'
import { useNumberPage } from "../../../../features/numberPage";


export const Navigator = () => {

    const { posts, valuePage, chengePage } = useNumberPage()

    
    const [page, setPage] = useState<number[]>([1,2,3,4,5,6,7]);

    const numberOfPages = Math.ceil((Number(posts?.count) - 11) / 12)

    // useEffect(() => {

        
    //     for(let i = 2; i < numberOfPages; i++){
            
    //         page?.push(i)
            
    //     }
        
        
        
    //     console.log(page);
        
        
    // }, [numberOfPages])
    
    
    return (
        <div className="navigator">
            <button className="navigator__pointer" onClick={() => {valuePage.numberPage > 1 && chengePage(valuePage.numberPage - 1)}}>
                <Left/>
                <p className="navigator__pointer-text">Prev</p>
            </button>
            <div className="navigator__number">
                {page.map(numberPage => {
                    return (
                        <NumberPage key={numberPage} numberPage={numberPage} onClick={() => chengePage(numberPage)}/>
                    )
                })}
            </div>
            <button className="navigator__pointer" onClick={() => {valuePage.numberPage < 7 && chengePage(valuePage.numberPage + 1)}}>
                <p className="navigator__pointer-text">Next</p>
                <Right/>
            </button>
        </div>
    )
}