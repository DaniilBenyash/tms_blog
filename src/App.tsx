import React, { useState } from 'react';
import { Button } from './components/Button/Button'
import { ReactComponent as Bookmark } from './components/Button/icon/like.svg'
import { ReactComponent as Like } from './components/Button/icon/like.svg'
import { ReactComponent as Dislike } from './components/Button/icon/dislike.svg'

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleThme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }
  return (
    <div className={`App theme--${theme}`}>
        <Button text='Primary' onClick={toggleThme} className='button--primary' disabled={false}/>
        <Button text='Secondary' onClick={() => console.log('Text')} className='button--secondary' disabled={false}/>
        <Button text='Secondary 2' onClick={() => console.log('Text')} className='button--secondary2' disabled={false}/>
        <Button text='Button with icon' onClick={() => console.log('Text')} className='button--with_icon' disabled={false} icon={<Bookmark />}/>
        <Button onClick={() => console.log('Text')} className='button--like' disabled={false} icon={<Like />}/>
        <Button onClick={() => console.log('Text')} className='button--dislike' disabled={false} icon={<Dislike />}/>
    </div>
  );
}

export default App;