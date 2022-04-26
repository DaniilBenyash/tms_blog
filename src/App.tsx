import React, { useState } from 'react';
import { Input } from './components/Input/Input'
import { Textarea } from './components/Textarea/Textarea'
import { PostCard } from './components/PostCard/postcard'
import { Header } from './components/Header/Header'
import Space from './components/PostCard/img/Rectangle 39.png'
import SpaceBig from './components/PostCard/img/Rectangle 39 small.png'
import SpaceSmall from './components/PostCard/img/Rectangle 39 mob.png'

function App() {
  return (
    <div className="App">
        <Input label='Text' placeholder='Add your text' disabled={false}/>
        <Input label='Email' placeholder='Your email' disabled={false}/>
        <Input label='Password' placeholder='Your password' disabled={false}/>

        <Textarea label='Text' placeholder='Add your text'  cols={74} rows={10}/>

        <PostCard type='pd'
          pdname='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
          content='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
          img={Space}
        />

        <PostCard type='pdBig'
          pdname='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
          imgBig={SpaceBig}
        />

        <PostCard type='pdSmall'
          pdname='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
          img={SpaceSmall}
        />
        <Header firstName='Daniil' lastName='Benyash'/>
    </div>
  )
}

export default App;
