import React  from 'react';
import './Post.scss'
import { Title } from '../../components/Title';
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

    const { getPost, onLikePost, onDislikePost, onFavoritePost } = usePosts()
    
    const { id } = useParams();

    const post = getPost(Number(id)-1)
    return (
        <div className='post'>
            <section className="post__section">                
                <p className='post__number-post'><Link to='/' className='post__link-home'>Home </Link>| Post {id}</p>
                <h1 className='post__title'>{post?.title}</h1>           
                <div className='post__info'>
                    <img src={post?.image} alt="" className='post__image'/>
                    <p className='post__text'>{post?.text}</p>
                    <div className='post__line-like'>
                        <div className='post__like'>
                            <Button 
                                onClick={() => onLikePost(Number(id))} 
                                className='button--like' 
                                disabled={false} 
                                icon={post?.like ? <LikeTrue/> : <Like/>}
                            />
                            <Button 
                                onClick={() => onDislikePost(Number(id))} 
                                className='button--dislike' 
                                disabled={false} 
                                icon={post?.like === false ? <DislikeTrue/> : <Dislike/>}
                            />
                        </div>
                        <Button 
                            text={
                                post?.favorite
                                ?
                                'Remove to favorite'
                                :
                                'Add to favorite'
                            } 
                            onClick={() => onFavoritePost(Number(id))} 
                            className='button--with_icon' 
                            disabled={false} 
                            icon={post?.favorite ? <BookmarkTrue/> : <Bookmark/>}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
