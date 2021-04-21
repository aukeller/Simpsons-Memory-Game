import React from "react";
import Card from "./Card";

const CardLayout = (props) => {
  const cards = props.cards;

  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          setCardClicked={props.setCardClicked}
          img={card.img}
        />
      ))}
    </div>
  );
};

export default CardLayout;
