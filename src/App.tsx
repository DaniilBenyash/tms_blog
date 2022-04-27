import React, { useState } from 'react';
import './App.css'
import { Input } from './components/Input/Input'
import { Textarea } from './components/Textarea/Textarea'
import { PostCard } from './components/PostCard/PostCard'
import { Header } from './components/Header/Header'
import { PostList } from './components/PostList/PostList'
import Space from './components/PostCard/img/Rectangle 39.png'
import SpaceAverage from './components/PostCard/img/Rectangle 39 small.png'
import SpaceSmall from './components/PostCard/img/Rectangle 39 mob.png'

function App() {
  return (
    <div className="App">
        <Header firstName='Daniil' lastName='Benyash'/>
        <PostList />
        <Input label='Text' placeholder='Add your text' disabled={false}/>
        <Input label='Email' placeholder='Your email' disabled={false}/>
        <Input label='Password' placeholder='Your password' disabled={false}/>

        <Textarea label='Text' placeholder='Add your text'  cols={74} rows={10}/>

        <PostCard 
            size='postcard'
            postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
            postcardText='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
            img={Space}
        />

        <PostCard 
            size='postcardAverage'
            postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
            imgAverage={SpaceAverage}
        />

        <PostCard 
            size='postcardSmall'
            postcardName='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
            img={SpaceSmall}
        />
    </div>
  )
}

export default App;
