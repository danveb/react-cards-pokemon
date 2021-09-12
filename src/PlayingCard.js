import React, { useState } from "react";
import useFlip from './hooks/useFlip'
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };

  const [isFacingUp, setFlip] = useFlip(true) 

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={setFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
