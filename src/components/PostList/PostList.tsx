import React, { ReactElement, useEffect, useState } from "react";
import './PostList.css'
import { Header } from "../Header/Header";
import { PostCard } from '../PostCard/PostCard'
import { Navigator } from "../Navigator/Navigator";

type Post = {
    postcardName: string,
    postcardText: string,
    img: string,
}
const postsFormServer: Post[] = [
    { 
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: '../PostCard/img/Rectangle 39.png'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: '../PostCard/img/Rectangle 39 small.png'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: '../PostCard/img/Rectangle 39 mob.png'
    },
    { 
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: '../PostCard/img/Rectangle 39.png'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: '../PostCard/img/Rectangle 39 small.png'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: '../PostCard/img/Rectangle 39 mob.png'
    },
    { 
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: '../PostCard/img/Rectangle 39.png'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: '../PostCard/img/Rectangle 39 small.png'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: '../PostCard/img/Rectangle 39 mob.png'
    },
    { 
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: '../PostCard/img/Rectangle 39.png'
    },
    {
        postcardName: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        postcardText: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img: '../PostCard/img/Rectangle 39 small.png'
    },
]

type Card = {
    info: Post,
    size: string,
}
const Card = ({info, size}: Card) => {
    return (
        <PostCard 
            size={size} 
            postcardName={info.postcardName}
            postcardText={info.postcardText}
            img={info.img}
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
                            <Card info={post} size='postcard' />
                        </div>
                    )
                }else if(id < 6){
                    return (
                        <div key={id} className={`post-list__content-item${id+1}`}>
                            <Card info={post} size='postcardAvarage' />
                        </div>
                    )
                }else if(id < 11){
                    return (
                        <div key={id} className={`post-list__content-item${id+1}`}>
                            <Card info={post} size='postcardSmall' />
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
                
                <Header firstName='Daniil' lastName='Benyash'/>

                <h1 className="post-list__h1">Blog</h1>

                <div className="post-list__nav">
                    <button className="post-list__nav-item">All</button>
                    <button className="post-list__nav-item">My favorites</button>
                    <button className="post-list__nav-item">Popular</button>
                </div>

                {infoPosts.length === 0 && <p className="post-list__loading">Loading data...</p>}

                < Posts posts={infoPosts}/>

                <Navigator />

                <footer className="post-list__footer">
                    <p>2022 Blogofolio</p>
                    <p>All rights reserved</p>
                </footer>

            </div>
        </div>
    )
}