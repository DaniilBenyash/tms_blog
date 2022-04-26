import React, { useState } from 'react';
import { Input } from './components/Input/Input'
import { Textarea } from './components/Textarea/Textarea'
import { PostCard } from './components/PostCard/postcard'
import Space from './components/PostCard/img/Rectangle 39.png'
import SpaceSmall from './components/PostCard/img/Rectangle 39 small.png'
import SpaceMob from './components/PostCard/img/Rectangle 39 mob.png'

function App() {
  return (
    <div className="App">
        <Input type='input' className='input' placeholder='Add your text' disabled={false} label='Text'/>
        <Input type='input' className='input' placeholder='Your email' disabled={false} label='Email'/>
        <Input type='input' className='input' placeholder='Your password' disabled={false} label='Password'/>
        <Textarea className='textarea' name='textarea' placeholder='Add your text' cols={74} rows={10} label='Text'/>

        <PostCard className={{postcard: 'postcard', content: 'content', pdname: 'pdname', pdleftcontent: 'pdleftcontent', 
           date: 'date', contentText: 'contentText', img: 'imgPD' }}
          pdname='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
          content='Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'
          img={Space}
        />

        <PostCard className={{postcard: 'postcardSmall', content: 'contentSmall', pdname: 'pdnameSmall', pdleftcontent: 'pdleftcontentSmall', 
           date: 'date', contentText: 'contentText', imgSmall: 'imgSmall'}}
          pdname='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
          imgSmall={SpaceSmall}
        />

        <PostCard className={{postcard: 'postcardMob', content: 'content', pdname: 'pdnameMob', pdleftcontent: 'pdleftcontent',
           date: 'date', contentText: 'contentText', img: 'imgMob' }}
          pdname='Astronauts prep for new solar arrays on nearly seven-hour spacewalk'
          img={SpaceMob}
        />
    </div>
  )
}

export default App;
