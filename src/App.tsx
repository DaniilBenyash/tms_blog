import React from 'react';
import { Button } from './components/Button/Button'
import Bookmark from '../src/components/Button/icon/bookmark.svg'
import Like from '../src/components/Button/icon/like.svg'
import Dislike from '../src/components/Button/icon/dislike.svg'

function App() {

  return (
    <div className="App">
        <Button text='Primary' onClick={() => console.log('Text')} className='primary' disable={false}/>
        <Button text='Secondary' onClick={() => console.log('Text')} className='secondary' disable={false}/>
        <Button text='Secondary 2' onClick={() => console.log('Text')} className='secondary2' disable={false}/>
        <Button text='Button with icon' onClick={() => console.log('Text')} className='buttonWithIcon' disable={false} icon={Bookmark}/>
        <Button onClick={() => console.log('Text')} className='like' disable={false} icon={Like}/>
        <Button onClick={() => console.log('Text')} className='dislike' disable={false} icon={Dislike}/>
    </div>
  );
}

export default App;