import React, { useState } from 'react';

import Header from './components/Header';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Chat from './components/Chat'; 
import './App.css';


function App() {
  return (
    <>
      <Header />
      {/* <Chat /> */}
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </>
  );
}

export default App;
