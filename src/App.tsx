import React, { useState } from 'react';
import { Button } from './components/Button/Button'
import { ReactComponent as Bookmark } from './components/Button/icon/like.svg'
import { ReactComponent as Like } from './components/Button/icon/like.svg'
import { ReactComponent as Dislike } from './components/Button/icon/dislike.svg'
import { setTheme } from './redux/reducers/theme'
import { useAppSelector, useAppDispatch } from './redux/hooks';

function App() {

  const theme = useAppSelector(state => state.theme.value)
  const dispatch = useAppDispatch()

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    dispatch(setTheme(newTheme))
  }
  return (
    <div className={`App theme--${theme}`}>
        <Button text='Primary' onClick={toggleTheme} className='button--primary' disabled={false}/>
        <Button text='Secondary' onClick={() => console.log('Text')} className='button--secondary' disabled={false}/>
        <Button text='Secondary 2' onClick={() => console.log('Text')} className='button--secondary2' disabled={false}/>
        <Button text='Button with icon' onClick={() => console.log('Text')} className='button--with_icon' disabled={false} icon={<Bookmark />}/>
        <Button onClick={() => console.log('Text')} className='button--like' disabled={false} icon={<Like />}/>
        <Button onClick={() => console.log('Text')} className='button--dislike' disabled={false} icon={<Dislike />}/>
    </div>
  );
}

export default App;