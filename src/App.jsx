import { useGame } from "./context/GameContext";
import Welcome from "../gameComponets/Welcome";
import Game from "../gameComponets/Game";

export default function App() {
  const { gameState } = useGame();

  return (
    <main>
      {gameState === "welcome" && <Welcome />}
      {gameState === "playing" && <Game />}
    </main>
  );
}