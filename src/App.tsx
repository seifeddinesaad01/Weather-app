import React from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='flex flex-col items-center justify-center w-full bg-cover bg-center  h-[100vh] bg-[url(https://thumbs.dreamstime.com/b/grey-sky-cloudy-background-changeable-weather-natural-clouds-overcast-beautiful-dramatic-sky-effect-grey-aka-gray-sky-cloudy-141536221.jpg)]'>
      <Header />
      <Main />
    </div>


  );
}

export default App;
