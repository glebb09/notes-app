import React from 'react';

import Navbar from './components/organisms/navbar';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.container}>
      <Navbar />
      
      <div className={s.content}>

      </div>
    </div>
  );
}

export default App;
