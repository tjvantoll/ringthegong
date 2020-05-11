import React from 'react';

import { getSaleSnapshot, getSaleId } from "../services/data";

export default function Counter() {
  const [count, setCount] = React.useState("00000000");

  React.useEffect(() => {
    if (!getSaleId()) {
      return ;
    }
    /*
    getSaleSnapshot(doc => {
      const data = doc.data();
      setCount(data.count.toString().padStart(8, "0"));
    });
    */
  }, []);

  return (
    <div className="counter-wrapper">
      <p>Gongs:</p>
      <div className="counter">
        {count}
      </div>
    </div>
  )
}