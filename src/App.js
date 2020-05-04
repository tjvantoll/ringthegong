import React from 'react';
import firebase from "@firebase/app";

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

  React.useEffect(() => {
    let db = firebase.firestore();
    db.collection("wins")
      .doc("2")
      .onSnapshot(doc => {
        console.log(doc.data());
      });
    /*
    db.collection("gongs").get().then((querySnapshot) => {
      let count = 0;
      querySnapshot.forEach((doc) => {
        count++;
        console.log(`${doc.id} => ${doc.data()}`);
      });
      console.log("count: " + count);
    });
    */
  }, []);

  return (
    <div className={isItRaveTime ? "bg-spring bg-rave" : "bg-spring"}>
      <h1>Mr. Milks just closed a deal!</h1>
      <Gong onGongStart={onGongStart} onGongEnd={onGongEnd} />
      <Counter />
    </div>
  );
}

export default App;
