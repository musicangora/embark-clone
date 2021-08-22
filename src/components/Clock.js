import React, { useEffect, useState } from "react";

const formatTime = (date) => {
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = date.getSeconds();

  return  hours + (seconds%2===0 ? ":" : ".")  + minutes;
}

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
    <div className="clock-container">
      <h1 className="clock-border">{formatTime(date)}</h1>
    </div>
  );
};

export default Clock;