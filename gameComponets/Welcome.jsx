import { useGame } from "../context/GameContext";

export default function Welcome() {
  const { startGame, highScore } = useGame();

  return (
    <div className="welcome-screen">
      <h1>Whack a Mole</h1>
      <p>Welcome to Whack a Mole!</p>
      <p>Whack a mole to earn points. How many can you get?</p>
      
      <button onClick={startGame}>Play</button>

      <h2>High Scores</h2>
      {highScore.length === 0 ? (
        <p>None yet... Play the game</p>
      ) : (
        highScore.map((score, index) => <p key={index}>{score}</p>)
      )}
    </div>
  );
}