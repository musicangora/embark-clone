import React from 'react';
import './App.css';

import Clock from './components/Clock';

const requestURL = "https://source.unsplash.com/category/nature/1920x1279";

const App = () => {
  const background = {
    backgroundImage: `url(${requestURL})`
  }

  return (
    <div className="App" style={background}>
      <div className="box">
      <Clock />
      </div>
    </div>
  );
}

export default App;
