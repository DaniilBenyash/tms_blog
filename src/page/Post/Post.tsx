import React  from 'react';
import './Post.scss'
import { Title } from '../../components/Title';
import { Button } from '../../components/Button'
import { ReactComponent as Bookmark } from '../../components/Button/icon/bookmark.svg'
import { ReactComponent as Like } from '../../components/Button/icon/like.svg'
import { ReactComponent as Dislike } from '../../components/Button/icon/dislike.svg'
import { useParams } from "react-router-dom"
import { usePosts } from '../../features/posts/usePosts'
import { Link } from 'react-router-dom';

export const Post = () => {

    const { posts } = usePosts();

    const { id } = useParams();

    return (
        <div className='post'>
            <section className="post__section">                
                <p className='post__number-post'><Link to='/' className='post__link-home'>Home </Link>| Post {id}</p>
                <h1 className='post__title'>{posts?.[Number(id)-1].title}</h1>           
                <div className='post__info'>
                    <img src={posts?.[Number(id)-1].image} alt="" className='post__image'/>
                    <p className='post__text'>{posts?.[Number(id)-1].text}</p>
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
