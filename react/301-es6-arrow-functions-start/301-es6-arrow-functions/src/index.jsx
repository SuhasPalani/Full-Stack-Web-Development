import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

//// Map - Create a new array by doing something with each item in an array.
const doubledNumbers = numbers.map(x => x * 2);
console.log("Doubled Numbers:", doubledNumbers);

//// Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter(num => num < 10);
console.log("Filtered Numbers:", filteredNumbers);

//// Reduce - Accumulate a value by doing something to each item in an array.
const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber);
console.log("Sum:", sum);

//// Find - Find the first item that matches from an array.
const firstLargeNumber = numbers.find(num => num > 10);
console.log("First Number Greater Than 10:", firstLargeNumber);

//// FindIndex - Find the index of the first item that matches.
const firstLargeNumberIndex = numbers.findIndex(num => num > 10);
console.log("Index of First Number Greater Than 10:", firstLargeNumberIndex);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
