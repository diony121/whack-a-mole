import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const GameProvider = ({ children}) => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState([]);
  const [gameState, setGameState] = useState("welcome");
 
  const startGame = () => {
    setScore(0);
    setGameState("playing");
  };

  const value = {
    score,
    setScore,
    highScore,
    setHighScore,
    gameState,
    setGameState,
    startGame,
  };

  return (
    <GameContext.Provider value={value}>
      {Children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);