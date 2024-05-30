import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function latestTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  // Update time every second
  setInterval(() => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={latestTime}>Get Time</button>
    </div>
  );
}

export default App;
