import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";


function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img}/>
      </div>
      <div className="bottom">
        <Detail 
        DetailInfo={props.tel}
        />
        <Detail 
        DetailInfo={props.email}
        />
       
      </div>
    </div>
  );
}

export default Card;
