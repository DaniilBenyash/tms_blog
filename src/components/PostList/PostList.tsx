import React, { ReactElement, useEffect, useState } from "react";
import './PostList.scss'
import { PostCard } from '../PostCard/postcard'
import { NavigationMenu } from '../NavigationMenu/NavigationMenu'

type Post = {
    postcardName: string,
    postcardText: string,
    img: string,
}
const postsFormServer: Post[] = [
    { 
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1653264000&Signature=coSRkIouPpoNilpX6Rz4iNoszQRLigQTtnf5fMKqiJ5tuln7TUhyttadx6uL5HxfejWOb1WW4nyLMr~6Cn-Ss-CeP9ykOvBSVrozwbOWAYJ8IUWiq4gEc0IPgF1mJu4iIEzAOxRblB2JnHcZoFTWs8HsKppnT2Nz-EMNQPe2CehTvBnTtUUmZDHXQY8WeNV22MozHmyWssgiI4sX63WhLwgvV0ox-2hypznpv2ZV8XzFnZGOx5HCVxFPZ7cVu63lPERHGlpUPluCRqXf9hLfAYU0i2j9Fhexamal0uMF0qdqxigqNm9CDwCLXV3fFpcZIJlQnTd7BEqbEHJT9jvJ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1653264000&Signature=coSRkIouPpoNilpX6Rz4iNoszQRLigQTtnf5fMKqiJ5tuln7TUhyttadx6uL5HxfejWOb1WW4nyLMr~6Cn-Ss-CeP9ykOvBSVrozwbOWAYJ8IUWiq4gEc0IPgF1mJu4iIEzAOxRblB2JnHcZoFTWs8HsKppnT2Nz-EMNQPe2CehTvBnTtUUmZDHXQY8WeNV22MozHmyWssgiI4sX63WhLwgvV0ox-2hypznpv2ZV8XzFnZGOx5HCVxFPZ7cVu63lPERHGlpUPluCRqXf9hLfAYU0i2j9Fhexamal0uMF0qdqxigqNm9CDwCLXV3fFpcZIJlQnTd7BEqbEHJT9jvJ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1653264000&Signature=coSRkIouPpoNilpX6Rz4iNoszQRLigQTtnf5fMKqiJ5tuln7TUhyttadx6uL5HxfejWOb1WW4nyLMr~6Cn-Ss-CeP9ykOvBSVrozwbOWAYJ8IUWiq4gEc0IPgF1mJu4iIEzAOxRblB2JnHcZoFTWs8HsKppnT2Nz-EMNQPe2CehTvBnTtUUmZDHXQY8WeNV22MozHmyWssgiI4sX63WhLwgvV0ox-2hypznpv2ZV8XzFnZGOx5HCVxFPZ7cVu63lPERHGlpUPluCRqXf9hLfAYU0i2j9Fhexamal0uMF0qdqxigqNm9CDwCLXV3fFpcZIJlQnTd7BEqbEHJT9jvJ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    { 
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1653264000&Signature=coSRkIouPpoNilpX6Rz4iNoszQRLigQTtnf5fMKqiJ5tuln7TUhyttadx6uL5HxfejWOb1WW4nyLMr~6Cn-Ss-CeP9ykOvBSVrozwbOWAYJ8IUWiq4gEc0IPgF1mJu4iIEzAOxRblB2JnHcZoFTWs8HsKppnT2Nz-EMNQPe2CehTvBnTtUUmZDHXQY8WeNV22MozHmyWssgiI4sX63WhLwgvV0ox-2hypznpv2ZV8XzFnZGOx5HCVxFPZ7cVu63lPERHGlpUPluCRqXf9hLfAYU0i2j9Fhexamal0uMF0qdqxigqNm9CDwCLXV3fFpcZIJlQnTd7BEqbEHJT9jvJ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1653264000&Signature=coSRkIouPpoNilpX6Rz4iNoszQRLigQTtnf5fMKqiJ5tuln7TUhyttadx6uL5HxfejWOb1WW4nyLMr~6Cn-Ss-CeP9ykOvBSVrozwbOWAYJ8IUWiq4gEc0IPgF1mJu4iIEzAOxRblB2JnHcZoFTWs8HsKppnT2Nz-EMNQPe2CehTvBnTtUUmZDHXQY8WeNV22MozHmyWssgiI4sX63WhLwgvV0ox-2hypznpv2ZV8XzFnZGOx5HCVxFPZ7cVu63lPERHGlpUPluCRqXf9hLfAYU0i2j9Fhexamal0uMF0qdqxigqNm9CDwCLXV3fFpcZIJlQnTd7BEqbEHJT9jvJ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1653264000&Signature=coSRkIouPpoNilpX6Rz4iNoszQRLigQTtnf5fMKqiJ5tuln7TUhyttadx6uL5HxfejWOb1WW4nyLMr~6Cn-Ss-CeP9ykOvBSVrozwbOWAYJ8IUWiq4gEc0IPgF1mJu4iIEzAOxRblB2JnHcZoFTWs8HsKppnT2Nz-EMNQPe2CehTvBnTtUUmZDHXQY8WeNV22MozHmyWssgiI4sX63WhLwgvV0ox-2hypznpv2ZV8XzFnZGOx5HCVxFPZ7cVu63lPERHGlpUPluCRqXf9hLfAYU0i2j9Fhexamal0uMF0qdqxigqNm9CDwCLXV3fFpcZIJlQnTd7BEqbEHJT9jvJ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    { 
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1653264000&Signature=coSRkIouPpoNilpX6Rz4iNoszQRLigQTtnf5fMKqiJ5tuln7TUhyttadx6uL5HxfejWOb1WW4nyLMr~6Cn-Ss-CeP9ykOvBSVrozwbOWAYJ8IUWiq4gEc0IPgF1mJu4iIEzAOxRblB2JnHcZoFTWs8HsKppnT2Nz-EMNQPe2CehTvBnTtUUmZDHXQY8WeNV22MozHmyWssgiI4sX63WhLwgvV0ox-2hypznpv2ZV8XzFnZGOx5HCVxFPZ7cVu63lPERHGlpUPluCRqXf9hLfAYU0i2j9Fhexamal0uMF0qdqxigqNm9CDwCLXV3fFpcZIJlQnTd7BEqbEHJT9jvJ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1653264000&Signature=coSRkIouPpoNilpX6Rz4iNoszQRLigQTtnf5fMKqiJ5tuln7TUhyttadx6uL5HxfejWOb1WW4nyLMr~6Cn-Ss-CeP9ykOvBSVrozwbOWAYJ8IUWiq4gEc0IPgF1mJu4iIEzAOxRblB2JnHcZoFTWs8HsKppnT2Nz-EMNQPe2CehTvBnTtUUmZDHXQY8WeNV22MozHmyWssgiI4sX63WhLwgvV0ox-2hypznpv2ZV8XzFnZGOx5HCVxFPZ7cVu63lPERHGlpUPluCRqXf9hLfAYU0i2j9Fhexamal0uMF0qdqxigqNm9CDwCLXV3fFpcZIJlQnTd7BEqbEHJT9jvJ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1653264000&Signature=coSRkIouPpoNilpX6Rz4iNoszQRLigQTtnf5fMKqiJ5tuln7TUhyttadx6uL5HxfejWOb1WW4nyLMr~6Cn-Ss-CeP9ykOvBSVrozwbOWAYJ8IUWiq4gEc0IPgF1mJu4iIEzAOxRblB2JnHcZoFTWs8HsKppnT2Nz-EMNQPe2CehTvBnTtUUmZDHXQY8WeNV22MozHmyWssgiI4sX63WhLwgvV0ox-2hypznpv2ZV8XzFnZGOx5HCVxFPZ7cVu63lPERHGlpUPluCRqXf9hLfAYU0i2j9Fhexamal0uMF0qdqxigqNm9CDwCLXV3fFpcZIJlQnTd7BEqbEHJT9jvJ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    { 
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1653264000&Signature=coSRkIouPpoNilpX6Rz4iNoszQRLigQTtnf5fMKqiJ5tuln7TUhyttadx6uL5HxfejWOb1WW4nyLMr~6Cn-Ss-CeP9ykOvBSVrozwbOWAYJ8IUWiq4gEc0IPgF1mJu4iIEzAOxRblB2JnHcZoFTWs8HsKppnT2Nz-EMNQPe2CehTvBnTtUUmZDHXQY8WeNV22MozHmyWssgiI4sX63WhLwgvV0ox-2hypznpv2ZV8XzFnZGOx5HCVxFPZ7cVu63lPERHGlpUPluCRqXf9hLfAYU0i2j9Fhexamal0uMF0qdqxigqNm9CDwCLXV3fFpcZIJlQnTd7BEqbEHJT9jvJ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: 'https://s3-alpha-sig.figma.com/img/52f9/5dda/fe2406480a136180247e955f197ca67e?Expires=1653264000&Signature=coSRkIouPpoNilpX6Rz4iNoszQRLigQTtnf5fMKqiJ5tuln7TUhyttadx6uL5HxfejWOb1WW4nyLMr~6Cn-Ss-CeP9ykOvBSVrozwbOWAYJ8IUWiq4gEc0IPgF1mJu4iIEzAOxRblB2JnHcZoFTWs8HsKppnT2Nz-EMNQPe2CehTvBnTtUUmZDHXQY8WeNV22MozHmyWssgiI4sX63WhLwgvV0ox-2hypznpv2ZV8XzFnZGOx5HCVxFPZ7cVu63lPERHGlpUPluCRqXf9hLfAYU0i2j9Fhexamal0uMF0qdqxigqNm9CDwCLXV3fFpcZIJlQnTd7BEqbEHJT9jvJ-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    },
]
type PostCardClass = {
    postcard: string,
    content: string,
    img?: string,
    imgMedium?: string,
    name: string,
}
type Card = {
    info: Post,
    size: string,
    className: PostCardClass
}
const Card = ({info, size, className}: Card) => {
    return (
        <PostCard 
            size={size} 
            postcardName={info.postcardName}
            postcardText={info.postcardText}
            img={info.img}
            className={className}
        /> 
    )
}

type Posts = {
    posts : Post[]
}
const Posts = ({posts}: Posts) => {
    return (
        
        <div className="post-list__content">

            {posts.map((post, id) => {

                if(id === 0){
                    return (
                        <div key={id} className={`post-list__content-item${id+1}`}>
                            <Card 
                            info={post} 
                            size='postcardBig' 
                            className={{postcard: 'post-card-big', content: 'post-card-big__content', img: 'post-card-big__img', name: 'post-card-big__name'}}
                            />
                        </div>
                    )
                }else if(id < 5){
                    return (
                        <div key={id} className={`post-list__content-item${id+1}`}>
                            <Card 
                            info={post} 
                            size='postcardMedium'
                            className={{postcard: 'post-card-medium', content: 'post-card-medium__content', imgMedium: 'post-card-medium__img', name: 'post-card-medium__name'}}
                            />
                        </div>
                    )
                }else if(id < 11){
                    return (
                        <div key={id} className={`post-list__content-item${id+1}`}>
                            <Card 
                            info={post} 
                            size='postcardSmall'
                            className={{postcard: 'post-card-small', content: 'post-card-small__content', img: 'post-card-small__img', name: 'post-card-small__name'}}
                            />
                        </div>
                    )
                }else{
                    return
                }

            })}

        </div>
    )
}

export const PostList = () => {

    const [infoPosts, setInfoPosts] = useState<Post[]>([])

    useEffect(() => {

        setTimeout(() => {

            setInfoPosts(postsFormServer)

        }, 1000)
    }, [])

    return (
        <div className="post-list">
            <div className="post-list__section">

                <h1 className="post-list__h1">Blog</h1>

                < NavigationMenu />

                {infoPosts.length === 0 && <p className="post-list__loading">Loading data...</p>}

                < Posts posts={infoPosts}/>

            </div>
        </div>
    )
}