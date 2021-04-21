import React, { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import CardLayout from "./components/CardLayout";
import "./styles/card-style.css";

import barney from "./cardImages/barney.png";
import bart from "./cardImages/bart.png";
import flanders from "./cardImages/flanders.png";
import homer from "./cardImages/homer.webp";
import lisa from "./cardImages/lisa.png";
import maggie from "./cardImages/maggie.png";
import marge from "./cardImages/marge.webp";
import milhouse from "./cardImages/milhouse.webp";
import moe from "./cardImages/moe.png";
import mrburns from "./cardImages/mr-burns.webp";
import nelson from "./cardImages/nelson.png";
import ralph from "./cardImages/ralph.png";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // add images
  const initialCardState = [
    { id: 1, name: "Homer", clicked: false, img: homer },
    { id: 2, name: "Marge", clicked: false, img: marge },
    { id: 3, name: "Bart", clicked: false, img: bart },
    { id: 4, name: "Lisa", clicked: false, img: lisa },
    { id: 5, name: "Maggie", clicked: false, img: maggie },
    { id: 6, name: "Moe", clicked: false, img: moe },
    { id: 7, name: "Mr. Burns", clicked: false, img: mrburns },
    { id: 8, name: "Flanders", clicked: false, img: flanders },
    { id: 9, name: "Barney", clicked: false, img: barney },
    { id: 10, name: "Milhouse", clicked: false, img: milhouse },
    { id: 11, name: "Nelson", clicked: false, img: nelson },
    { id: 12, name: "Ralph", clicked: false, img: ralph },
  ];
  const [cards, setCards] = useState(initialCardState);

  const shuffleCards = (cardsCopy) => {
    for (let i = 0; i < cardsCopy.length; i++) {
      const j = Math.floor(Math.random() * i);
      const temp = cardsCopy[i];
      cardsCopy[i] = cardsCopy[j];
      cardsCopy[j] = temp;
    }
    return cardsCopy;
  };

  const setCardClicked = (e) => {
    const cardsCopy = [].concat(cards);
    let cardClicked;

    for (let i = 0; i < cardsCopy.length; i++) {
      console.log(e.target);
      if (cardsCopy[i].name === e.target.className) {
        cardClicked = cardsCopy[i];
      }
    }

    if (cardClicked.clicked) {
      setScore(0);
      setCards(initialCardState);
    } else if (score >= bestScore) {
      setScore(score + 1);
      setBestScore(score + 1);
      cardClicked.clicked = true;
      setCards(shuffleCards(cardsCopy));
    } else {
      setScore(score + 1);
      cardClicked.clicked = true;
      setCards(shuffleCards(cardsCopy));
    }
  };

  return (
    <div className="App">
      <h1>Simpsons Memory Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
      <CardLayout cards={cards} setCardClicked={setCardClicked} />
    </div>
  );
}

export default App;
