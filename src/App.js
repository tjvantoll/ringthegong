import React from 'react';
import './App.scss';

import Gong from './components/Gong';
import Counter from "./components/Counter";
import Kendoka from "./components/Kendoka";

import { getSaleInfo, getSaleId } from "./services/data";

function App() {
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    getSaleInfo(getSaleId()).then(doc => {
      const data = doc.data();
      setMessage(`${data.salesreps} just closed a deal with ${data.client}!`);
    })
  }, []);

  const onGongStart = () => {
    document.body.classList.add('bg-rave');
  }
  const onGongEnd = () => {
    document.body.classList.remove('bg-rave');
  }

  return (
    <>
      <h1>{message}</h1>
      
      <div className="gong-wrapper">
        <Counter />
        <Kendoka />
        <Gong onGongStart={onGongStart} onGongEnd={onGongEnd} />
      </div>
   </>
  );
}

export default App;
