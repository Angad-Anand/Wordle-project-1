import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { 
    gameOver, 
    currAttempt, 
    correctWord ,
    } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h1>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle 🥳🥳"
          : "You Failed to Guess the Word"}
      </h1>
      <h1>Correct: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You Guessed in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default GameOver;
