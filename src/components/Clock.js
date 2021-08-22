import React, { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect (() => {
    const timerID = setInterval(
      () => setDate(new Date()),
      1000
    );

    return () => {
      clearInterval(timerID);
    }
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;