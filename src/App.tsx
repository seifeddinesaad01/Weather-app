import React from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='flex flex-col items-center justify-center bg-black'>
      <Header />
      <Main />
    </div>


  );
}

export default App;
