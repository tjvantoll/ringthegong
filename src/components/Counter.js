import React from 'react';

export default function Counter() {
  const [count, setCount] = React.useState(0);
  const [displayCount, setDisplayCount] = React.useState("00000000");

  React.useEffect(() => {
    setInterval(() => {
      setCount((count) => {
        let countIWant = count + 1;
        setCount(countIWant);
        setDisplayCount(countIWant.toString().padStart(8, "0"));
      });
    }, 1);

  }, []);

  return (
    <div className="counter">
      {displayCount}
    </div>
  )
}