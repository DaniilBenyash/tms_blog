import React from 'react';
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