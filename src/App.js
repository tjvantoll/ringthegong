import React from 'react';
import './App.scss';

import Gong from './components/Gong';
// import Counter from "./components/Counter";
import Kendoka from './components/kendoka';

function App() {
  const onGongStart = () => {
    document.body.classList.add('bg-rave');
  }
  const onGongEnd = () => {
    document.body.classList.remove('bg-rave');
  }

  document.body.classList.add('bg-spring');
  
  return (
    <div>
      <h1>Mr. Milks just closed a deal!</h1>
      <div class="togetherness">
        <Kendoka/>
        <Gong onGongStart={onGongStart} onGongEnd={onGongEnd} />
      </div>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
