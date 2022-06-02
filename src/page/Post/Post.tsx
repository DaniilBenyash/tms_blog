import React, { useEffect }  from 'react';
import './Post.scss'
import { Button } from '../../components/Button'
import { ReactComponent as Bookmark } from '../../components/Button/icon/bookmark.svg'
import { ReactComponent as Like } from '../../components/Button/icon/like.svg'
import { ReactComponent as Dislike } from '../../components/Button/icon/dislike.svg'
import { ReactComponent as BookmarkTrue } from '../../components/Button/icon/Bookmark-True.svg'
import { ReactComponent as LikeTrue} from '../../components/Button/icon/like-true.svg'
import { ReactComponent as DislikeTrue} from '../../components/Button/icon/dislike-true.svg'
import { useParams } from "react-router-dom"
import { usePosts } from '../../features/posts/usePosts'
import { Link } from 'react-router-dom';

export const Post = () => {
    
    const { getInfoOnePost, onePost, onLikePost, onDislikePost, onFavoritePost, getOnePost } = usePosts()
    
    const { id } = useParams();
    const idForOnePost = Number(id)
    const idForInfoPost = Number(id) - 1;
    
    useEffect(() => {
        getOnePost(idForOnePost)
    }, [])

    const infoPost = getInfoOnePost(idForInfoPost);

    return (
        <main className='post'>
            <section className="post__section">                
                <p className='post__number-post'><Link to='/' className='post__link-home'>Home </Link>| Post {id}</p>
                <h1 className='post__title'>{onePost?.title}</h1>           
                <div className='post__info'>
                    <img src={onePost?.image} alt="" className='post__image'/>
                    <p className='post__text'>{onePost?.text}</p>
                    <div className='post__line-like'>
                        <div className='post__like'>
                            <Button 
                                onClick={() => onLikePost(Number(id))} 
                                className='button--like' 
                                disabled={false} 
                                icon={infoPost?.like ? <LikeTrue/> : <Like/>}
                            />
                            <Button 
                                onClick={() => onDislikePost(Number(id))} 
                                className='button--dislike' 
                                disabled={false} 
                                icon={infoPost?.like === false ? <DislikeTrue/> : <Dislike/>}
                            />
                        </div>
                        <Button 
                            text={
                                infoPost?.favorite
                                ?
                                'Remove to favorite'
                                :
                                'Add to favorite'
                            } 
                            onClick={() => onFavoritePost(Number(id))} 
                            className='button--with_icon' 
                            disabled={false} 
                            icon={infoPost?.favorite ? <BookmarkTrue/> : <Bookmark/>}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
