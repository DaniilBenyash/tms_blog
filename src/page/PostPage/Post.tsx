import React, { useEffect }  from 'react';
import './Post.scss'
import { Button } from '../../components/Button'
import { ReactComponent as Left} from './icon/left.svg'
import { ReactComponent as Right} from './icon/right.svg'
import { ReactComponent as Bookmark } from '../../components/Button/icon/bookmark.svg'
import { ReactComponent as Like } from '../../components/Button/icon/like.svg'
import { ReactComponent as Dislike } from '../../components/Button/icon/dislike.svg'
import { ReactComponent as BookmarkTrue } from '../../components/Button/icon/Bookmark-True.svg'
import { ReactComponent as LikeTrue} from '../../components/Button/icon/like-true.svg'
import { ReactComponent as DislikeTrue} from '../../components/Button/icon/dislike-true.svg'
import { useParams } from "react-router-dom"
import { usePosts } from '../../features/getPosts/usePosts'
import { Link } from 'react-router-dom';

export const Post = () => {
    
    const { getInfoOnePost, onePost, onLikePost, onDislikePost, onFavoritePost, getOnePost } = usePosts()
    
    const { id } = useParams();
    const idPost = Number(id)
    
    useEffect(() => {
        getOnePost(idPost)
    }, [id])

    const infoPost = getInfoOnePost(idPost);
    const infoPrevPost = getInfoOnePost(idPost - 1);
    const infoNextPost = getInfoOnePost(idPost + 1);
    
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
                                onClick={() => onLikePost(idPost)} 
                                className='button--like' 
                                disabled={false} 
                                icon={infoPost?.like ? <LikeTrue/> : <Like/>}
                            />
                            <Button 
                                onClick={() => onDislikePost(idPost)} 
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
                            onClick={() => onFavoritePost(idPost)} 
                            className='button--with_icon' 
                            disabled={false} 
                            icon={infoPost?.favorite ? <BookmarkTrue/> : <Bookmark/>}
                        />
                    </div>
                </div>
                <div className='post__navigator'>
                    <Link to={infoPrevPost?.title  ? `/post/${idPost-1}` : `/post/${idPost}`} className='post__navigator-button'>
                        <Left/>
                        <div className='post__navigator-left'>
                            <p className='post__navigator-text-up'>Prev</p>
                            <p className='post__navigator-text-down'>{infoPrevPost?.title}</p>
                        </div>
                    </Link>
                    <Link to={infoNextPost?.title ? `/post/${idPost+1}` : `/post/${idPost}`} className='post__navigator-button'>
                        <div className='post__navigator-right'>
                            <p className='post__navigator-text-up'>Next</p>
                            <p className='post__navigator-text-down'>{infoNextPost?.title}</p>
                        </div>
                        <Right/>
                    </Link>
                </div>
            </section>
        </main>
    )
}
