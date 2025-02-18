import { useState } from "react";
import { data, gameElements } from "../data.js";

const Game = () => {
  const [elements, setElements] = useState(data);
  const [players, setPlayers] = useState([]);
  const [gameLog, setGameLog] = useState([]);
  const [counter, setCounter] = useState(0);
  const [lastIdx, setLastIdx] = useState(null)

  const handleChoice = (player) => {
    if (players.length < 2) {
      setPlayers((prevPlayers) =>
        player !== prevPlayers[0] ? [...prevPlayers, player] : [...prevPlayers]
      );
    }
  };

  const handleClick = (idxActive) => {
    setCounter((prevCount) => (prevCount += 1));
    setLastIdx(idxActive)
    if (counter % 2 === 0 && players.length >= 2 && lastIdx !== idxActive) {
      setGameLog((prevLogs) => [
        ...prevLogs,
        { idx: idxActive, item: players[0] },
      ]);
      setElements(
        elements.map((element) =>
          element.idx === idxActive
            ? { idx: element.idx, item: players[0] }
            : element
        )  
      );
    } else if (counter % 2 !== 0 && players.length >= 2 && lastIdx !== idxActive) {
      setGameLog((prevLogs) => [
        ...prevLogs,
        { idx: idxActive, item: players[1] },
      ]);
      setElements(
        elements.map((element) =>
          element.idx === idxActive
            ? { idx: element.idx, item: players[1] }
            : element
        )
      );
    } else {
      setCounter(0);
      return;
    }
  };

  const handleRestart = () => {
    setElements(data);
    setPlayers([]);
    setGameLog([]);
    setCounter(0);
  };

  return (
    <>
      <div>
        {gameElements.map((item, idx) => (
          <button onClick={() => handleChoice(item)} key={`game-el-${idx}`}>
            {item}
          </button>
        ))}
      </div>
      <div>
        {players.length > 0 &&
          players.map(
            (item, idx) =>
              idx <= 1 && (
                <button key={`activePlayer-${idx + 1}`}>{item}</button>
              )
          )}
      </div>
      <button onClick={handleRestart}>Restart</button>
      <p>
        Nuw turn:{" "}
        {players.length === 2 && counter % 2 === 0 ? players[0] : players[1]}
      </p>
      <p>Move number: {counter}</p>
      <div className="elementsContainer">
        {elements.map(({ idx, item }) => (
          <button
            disabled={players.length !== 2}
            className="element"
            onClick={() => handleClick(idx)}
            key={idx}
          >
            {item}
          </button>
        ))}
      </div>
      <ul>
        {gameLog.length > 0 &&
          gameLog.map(({ idx, item }) => (
            <li key={`log-${idx}`}>
              Player: {item}, clicked: {idx} point
            </li>
          ))}
      </ul>
    </>
  );
};

export default Game;
