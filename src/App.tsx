import React from 'react';
import { Button } from './components/Button/Button'
import { Input } from './components/Input';
import { Textarea } from './components/Textarea';
import { ReactComponent as Bookmark } from './components/Button/icon/like.svg'
import { ReactComponent as Like } from './components/Button/icon/like.svg'
import { ReactComponent as Dislike } from './components/Button/icon/dislike.svg'
import { Login } from './components/Login';
import { Registration } from './components/Registration';


function App() {

    return (
        <div className="App">
            
            <Login></Login>
            <Registration></Registration>
        </div>
    );
}

export default App;