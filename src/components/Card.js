import React from "react";

const Card = (props) => {
  const handleClick = (e) => {
    props.setCardClicked(e);
  };

  return (
    <div
      className={`${props.name} card`}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <img src={props.img} className={`${props.name}`}></img>
      <p className={`${props.name}`}>{props.name}</p>
    </div>
  );
};

export default Card;
