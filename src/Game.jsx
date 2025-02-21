import { useState } from "react";
import { data, gameElements } from "../data.js";
import GameCharacters from "./conponents/GameCharacters/GameCharacters.jsx";
import SelectedCharacters from "./conponents/SelectedCharacters/SelectedCharacters.jsx";
import HistoryOfMoves from "./conponents/HistoryOfMoves/HistoryOfMoves.jsx";
import GameBoard from "./conponents/GameBoard/GameBoard.jsx";

const Game = () => {
  const [elements, setElements] = useState(data);
  const [players, setPlayers] = useState([]);
  const [gameLog, setGameLog] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleClick = (idxActive) => {
    setCounter((prevCount) => (prevCount += 1));

    if (counter % 2 === 0) {
      setPosition(idxActive, players[0]);
    } else if (counter % 2 !== 0) {
      setPosition(idxActive, players[1]);
    } else {
      setCounter(0);
      return;
    }

    function setPosition(activeIdx, player) {
      setGameLog((prevLogs) => {
        if (prevLogs.some((log) => log.idx === activeIdx)) {
          return prevLogs;
        }
        return [...prevLogs, { idx: activeIdx, item: player }];
      });
      setElements(
        elements.map((element) =>
          element.idx === activeIdx && !element.item
            ? { idx: element.idx, item: player }
            : element
        )
      );
    }
  };

  const handleRestart = () => {
    setElements(data);
    setPlayers([]);
    setGameLog([]);
    setCounter(0);
  };

  const handleChangeCharacter = (el) => {
    const agreement = confirm("Are you sure? Game settings will be reset");
    if (agreement) {
      setElements(data);
      setPlayers(players.filter(item => item !== el));
      setGameLog([]);
      setCounter(0);
    }
  };

  return (
    <div className="container">
      <GameCharacters
        players={players}
        setPlayers={setPlayers}
        gameElements={gameElements}
      />
      <SelectedCharacters onChangeCharacter={handleChangeCharacter} players={players} handleRestart={handleRestart} counter={counter} gameLog={gameLog}/>
      <GameBoard
        elements={elements}
        players={players}
        handleClick={handleClick}
      />
      <HistoryOfMoves gameLog={gameLog} />
    </div>
  );
};

export default Game;
