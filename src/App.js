import React, { useEffect, useState } from 'react';
import './App.css';

import Clock from './components/Clock';

const requestURL = "https://source.unsplash.com/category/nature/1920x1279";


const App = () => {
  // const [bgImages, setBgImages] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.unsplash.com/photos/random/?client_id=PJzwryU_MjO2KYol7xvCywFr5q127ePjofi9P8qbKw0&count=10")
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         setBgImages([requestURL]);
  //         return Promise.reject();
  //       }
  //     })
  //     .then(result => {
  //       setBgImages(result.map((obj) => obj.urls.regular))
  //     });
  // }, []);

  // const setBgImage = (images) => {
  //   return images[Math.floor(Math.random()*bgImages.length)]
  // }
  // console.log(setBgImage(bgImages))

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
