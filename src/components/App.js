import React from 'react';
import './App.css';
import logo from './../Leeds_United_Logo.png'
import News from './News/News';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="lufc-header__content">
        <h1 className="lufc__h1">
       Leeds United News
        </h1>

        <p className="App-link">
          What the rest of the world sees
        </p>
        </div>
        <div className="lufc-header__logo"><img src={logo}/></div>

      </header>
      <News />
    </div>
  );
}

export default App;
