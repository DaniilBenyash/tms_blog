import React, { SelectHTMLAttributes, useEffect, useRef } from "react";
import './Posts.scss'
import { Card } from '../Card/Card'
import { IPost } from '../../../../features/getPosts/postsSlice'
import { Navigator } from '../Navigator'
import { useNumberPage } from '../../../../features/numberPage'



export const Posts = () => {

    const { posts, valuePage, chengePage, sortPost} = useNumberPage();

    useEffect(() => {
        if(valuePage.numberPage === 1) chengePage(valuePage.numberPage)
    }, [null])

    const sortPostValue = (event: any) => {
        sortPost(event.target.value);
    }
    
    return (
        <div className="posts">
            <div className="posts__sort">
                <p>Sort by:</p>
                <select name="Sort" id="" className="posts__select" onChange={sortPostValue} value={valuePage.sortValue}>
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                    <option value="text">Text</option>
                    <option value="lesson_num">Lesson number</option>
                </select>
            </div>
            <div className="posts__content">
                {posts?.results.map((post, index) => {
                    if(valuePage.numberPage === 1){
                        if(index === 0){
                            return (
                                <div key={index} className={`posts__content-item${index+1}`}>
                                    <Card 
                                    info={post} 
                                    size='postcardBig' 
                                    className={{postcard: 'post-card-big', content: 'post-card-big__content', img: 'post-card-big__img', title: 'title-big'}}
                                    />
                                </div>
                            )
                        }else if(index < 5){
                            return (
                                <div key={index} className={`posts__content-item${index+1}`}>
                                    <Card 
                                    info={post} 
                                    size='postcardMedium'
                                    className={{postcard: 'post-card-medium', content: 'post-card-medium__content', imgMedium: 'post-card-medium__img', title: 'title-medium'}}
                                    />
                                </div>
                            )
                        }else if(index < 11){
                            return (
                                <div key={index} className={`posts__content-item${index+1}`}>
                                    <Card 
                                    info={post} 
                                    size='postcardSmall'
                                    className={{postcard: 'post-card-small', content: 'post-card-small__content', img: 'post-card-small__img', title: 'title-small'}}
                                    />
                                </div>
                            )
                        }
                    } else {
                        if(index < 6){
                            return (
                                <div key={index} className={`posts__content-item${index+1}-1`}>
                                        <Card 
                                        info={post} 
                                        size='postcardMedium'
                                        className={{postcard: 'post-card-medium', content: 'post-card-medium__content', imgMedium: 'post-card-medium__img', title: 'title-medium'}}
                                        />
                                </div>
                            )
                        }else if(index < 12){
                            return (
                                <div key={index} className={`posts__content-item${index+1}-1`}>
                                    <Card 
                                    info={post} 
                                    size='postcardSmall'
                                    className={{postcard: 'post-card-small', content: 'post-card-small__content', img: 'post-card-small__img', title: 'title-small'}}
                                    />
                                </div>
                            )
                        }
                    }
                })}
            </div>
            <Navigator/>
        </div>
    )
}