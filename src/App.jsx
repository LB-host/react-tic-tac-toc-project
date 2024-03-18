import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function derriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setgameTurns] = useState([]);
  // const [activePlayer, setActiveyPlayer] = useState("X");

  const activePlayer = derriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // setActiveyPlayer((curActivePlayer) =>
    //   curActivePlayer === "X" ? "O" : "X"
    // );

    setgameTurns((prevTurns) => {
      const activePlayer = derriveActivePlayer(prevTurns);

      const updateTruns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: activePlayer,
        },
        ...prevTurns,
      ];

      return updateTruns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
