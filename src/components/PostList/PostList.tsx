import React from "react";
import './PostList.css'
import { Header } from "../Header/Header";
import { PostCard } from '../PostCard/PostCard'
import { Navigator } from "../Navigator/Navigator";
import Space from '../PostCard/img/Rectangle 39.png'
import SpaceAverage from '../PostCard/img/Rectangle 39 small.png'
import SpaceSmall from '../PostCard/img/Rectangle 39 mob.png'

export const PostList = () => {
    return (
        <div className="post-list">

            <Header firstName='Daniil' lastName='Benyash'/>

            <h1 className="post-list__h1">Blog</h1>

            <div className="post-list__nav">
                <button className="post-list__nav-item">All</button>
                <button className="post-list__nav-item">My favorites</button>
                <button className="post-list__nav-item">Popular</button>
            </div>

            <div className="post-list__content">

                <div className="post-list__content-item1">

                    <PostCard 
                        size='postcard'
                        postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                        postcardText='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
                        img={Space}
                    />
                </div>

                <div className="post-list__content-item2">

                    <PostCard 
                        size='postcardSmall'
                        postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                        img={SpaceSmall}
                    />
                </div>

                <div className="post-list__content-item3">

                    <PostCard  
                        size='postcardSmall'
                        postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                        img={SpaceSmall}
                    />
                </div>
            </div>

            <div className="post-list__content2">

                <div className="post-list__content-item4">

                    <PostCard  
                        size='postcardAverage'
                        postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                        imgAverage={SpaceAverage}
                     />
                </div>

                <div className="post-list__content-item5">

                    <PostCard  
                        size='postcardAverage'
                        postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                        imgAverage={SpaceAverage}
                    />
                </div>

                <div className="post-list__content-item6">

                    <PostCard  
                        size='postcardSmall'
                        postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                        img={SpaceSmall}
                    />
                </div>

                <div className="post-list__content-item7">

                    <PostCard  
                        size='postcardSmall'
                        postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                        img={SpaceSmall}
                    />
                </div>
            </div>

            <div className="post-list__content2">

                <div className="post-list__content-item4">

                    <PostCard  
                        size='postcardAverage'
                        postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                        imgAverage={SpaceAverage}
                     />
                </div>

                <div className="post-list__content-item5">

                    <PostCard  
                        size='postcardAverage'
                        postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                        imgAverage={SpaceAverage}
                    />
                </div>

                <div className="post-list__content-item6">

                    <PostCard  
                        size='postcardSmall'
                        postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                        img={SpaceSmall}
                    />
                </div>

                <div className="post-list__content-item7">
                     
                    <PostCard  
                        size='postcardSmall'
                        postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
                        img={SpaceSmall}
                    />
                </div>
            </div>

            <Navigator />

            <footer className="post-list__footer">
                <p>2022 Blogofolio</p>
                <p>All rights reserved</p>
            </footer>
        </div>
    )
}