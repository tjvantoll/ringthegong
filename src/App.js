import React from 'react';
import './App.scss';

import Gong from './components/Gong';
import Counter from "./components/Counter";
import Kendoka from "./components/Kendoka";

function App() {
  const onGongStart = () => {
    document.body.classList.add('bg-rave');
  }
  const onGongEnd = () => {
    document.body.classList.remove('bg-rave');
  }

  return (
    <>
      <h1>Mr. Milks just closed a deal!</h1>
      
      <div class="gong-wrapper">
        <Counter />
        <Kendoka />
        <Gong onGongStart={onGongStart} onGongEnd={onGongEnd} />
      </div>
   </>
  );
}

export default App;
