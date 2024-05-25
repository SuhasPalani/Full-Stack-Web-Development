import React from "react";
import ReactDOM from "react-dom";


const today = new Date();
const hour = today.getHours();

let greeting;
const styles = {};

if (hour >= 0 && hour < 12) {
  greeting = "Good morning";
  styles.color = "red";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good Afternoon";
  styles.color = "green";
} else {
  greeting = "Good evening";
  styles.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={styles}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
