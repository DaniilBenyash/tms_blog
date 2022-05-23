import React  from 'react';
import './Post.scss'
import { Title } from '../../components/Title';
import { Button } from '../../components/Button'
import { ReactComponent as Bookmark } from '../../components/Button/icon/bookmark.svg'
import { ReactComponent as Like } from '../../components/Button/icon/like.svg'
import { ReactComponent as Dislike } from '../../components/Button/icon/dislike.svg'

type PostProps = {
    id: number,
    titlePost: string,
    img: string,
    text: string,
}

export const Post = ({id, titlePost, img, text}: PostProps) => {
    return (
        <div className='post'>
            <section className="post__section">                
                <p className='post__number-post'><a className='post__button-home'>Home </a>| Post {id}</p>           
                < Title 
                    className='title-post'
                    title={titlePost}
                />
                <div className='post__info'>
                    <img src={img} alt="" className='post__image'/>
                    <p className='post__text'>{text}</p>
                    <div className='post__line-like'>
                        <div className='post__like'>
                            <Button 
                                onClick={() => console.log('Text')} 
                                className='button--like' 
                                disabled={false} 
                                icon={<Like />}
                            />
                            <Button 
                                onClick={() => console.log('Text')} 
                                className='button--dislike' 
                                disabled={false} 
                                icon={<Dislike />}
                            />
                        </div>
                        <Button 
                            text='Add to favorites' 
                            onClick={() => console.log('Text')} 
                            className='button--with_icon' 
                            disabled={false} 
                            icon={<Bookmark />}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
