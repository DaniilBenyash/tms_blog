import React, { useState } from 'react';
import { Input } from './components/Input/Input'
import { Textarea } from './components/Textarea/Textarea'


function App() {
  return (
    <div className="App">
        <Input type='input' className='input' placeholder='Add your text' disabled={false} label='Text'/>
        <Input type='input' className='input' placeholder='Your email' disabled={false} label='Email'/>
        <Input type='input' className='input' placeholder='Your password' disabled={false} label='Password'/>
        <Textarea className='textarea' name='textarea' placeholder='Add your text' cols={74} rows={10} label='Text'/>
    </div>
  )
}

export default App;
