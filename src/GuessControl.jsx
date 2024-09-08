import React, { useState } from "react";
import Button from "./Button";

const GuessControl = ({ onGuess }) => {
  const [currentGuess, setCurrentGuess] = useState("");  

  // Handles input change
  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value); 
  };

  // Handles submitting the guess
  const onSubmitGuess = () => {
    onGuess(Number(currentGuess)); 
    setCurrentGuess("");  
  };

  return (
    <div>
      <input
        type="number"
        value={currentGuess}  
        onChange={handleInputChange}  
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
};

export default GuessControl;
