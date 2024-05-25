import React from "react";
import ReactDOM from "react-dom";

const fname = "Suhas";
const lname = "Palani";
const lnum = 5;

ReactDOM.render(
  <div>
    <h1>Hello {fname}, {lname}!</h1>
    {/* <h1>Hello {`${fname} ${lname}`}</h1> ES6 literals */}
    <p>Your lucky number is {lnum}</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
