import React from "react";
import "../assets/App.css";

function Card(props) {
  const data = props.data;
  return (
    <div className="card">
      <img
        className="card-img"
        src={require(`../assets/images/${data.category}.jpg`)}
      />
      <div className="details">
        <p className="card-author">{data.author}</p>
        <p className="card-date">{data.date}</p>
        <p className="card-title">{data.title}</p>
        <div className="card-price">{data.price}</div>
      </div>
    </div>
  );
}

export default Card;
