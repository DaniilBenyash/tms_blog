import React from 'react';
import { Button } from './components/Button/Button'
import { Input } from './components/Input';
import { Textarea } from './components/Textarea';
import { ReactComponent as Bookmark } from './components/Button/icon/like.svg'
import { ReactComponent as Like } from './components/Button/icon/like.svg'
import { ReactComponent as Dislike } from './components/Button/icon/dislike.svg'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Navigator } from './components/Navigator/Navigator';

function App() {

  return (
    <div className="App">
        <Header/>
        <Navigator></Navigator>
        <Footer></Footer>
    </div>
  );
}

export default App;