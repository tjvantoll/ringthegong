import React from 'react';
import './App.scss';

import Gong from './components/Gong';
import Counter from "./components/Counter";

function App() {
  const [isItRaveTime, setIsRaveTime] = React.useState(false);
  const onGongStart = () => {
    setIsRaveTime(true);
  }
  const onGongEnd = () => {
    setIsRaveTime(false);
  }

  return (
    <div class={isItRaveTime ? "bg-spring bg-rave" : "bg-spring"}>
      <h1>Mr. Milks just closed a deal!</h1>
      <Gong onGongStart={onGongStart} onGongEnd={onGongEnd} />
      <Counter />
    </div>
  );
}

export default App;
