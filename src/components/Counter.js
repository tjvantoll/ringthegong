import React from 'react';

import { getSaleSnapshot } from "../services/data";

export default function Counter() {
  const [count, setCount] = React.useState("00000000");

  React.useEffect(() => {
    getSaleSnapshot((doc) => {
      const data = doc.data();
      setCount(data.count.toString().padStart(8, "0"));
    });
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