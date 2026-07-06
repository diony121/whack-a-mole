import { useEffect, useRef } from "react";
import { useGame } from "../src/context/GameContext";
import Hole from "./Hole";

export default function Game() {
  const { score, setScore, molePosition, setMolePosition, setGameState, timeLeft, setTimeLeft } = useGame();
  const timerRef = useRef(null);

  useEffect(() => {
    setTimeLeft(15);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleWhack = (index) => {
    if (timeLeft > 0 && index === molePosition) {
      setScore((s) => s + 1);
      let nextPosition;
      do {
        nextPosition = Math.floor(Math.random() * 9);
      } while (nextPosition === molePosition);
      setMolePosition(nextPosition);
    }
  };

  return (
    <div className="game-board">
      <h2>Score: {score} | Time: {timeLeft}</h2>
      {timeLeft === 0 && <button onClick={() => setGameState("welcome")}>Game Over! Go Back</button>}
      
      <div className="grid">
        {[...Array(9)].map((_, index) => (
          <Hole 
            key={index} 
            isMoleVisible={index === molePosition} 
            onClick={() => handleWhack(index)} 
          />
        ))}
      </div>
    </div>
  );
}