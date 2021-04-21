import React from "react";

const Scoreboard = (props) => {
  return (
    <div>
      <h3>Current score: {props.score}</h3>
      <h4>Best score: {props.bestScore} </h4>
    </div>
  );
};

export default Scoreboard;
