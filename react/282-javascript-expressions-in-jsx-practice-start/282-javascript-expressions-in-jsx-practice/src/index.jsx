//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from "react";
import ReactDom from "react-dom";
const today=new Date();
const fname='Suhas';
const lname='Palani';
const year=today.getFullYear();


ReactDom.render(
    <div>
        <p>Created by {fname} {lname}</p>
        <p>Copyright {year}</p>
    </div>,
    document.getElementById('root')

);