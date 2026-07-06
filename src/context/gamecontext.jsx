import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const GameProvider = ({ children}) => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState([]);
  const [gameState, setGameState] = useState("welcome");

  const [molePosition, setMolePosition] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
 
  const startGame = () => {
    setScore(0);
    setGameState("playing");
    setTimeLeft(15); 
    setMolePosition(Math.floor(Math.random() * 9)); 
  };

  const value = {
    score,
    setScore,
    highScore,
    setHighScore,
    gameState,
    setGameState,
    startGame,
    molePosition,
    setMolePosition,
    timeLeft,
    setTimeLeft,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);