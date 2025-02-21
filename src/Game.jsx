import { useEffect, useState } from "react";
import { data, gameElements } from "../data.js";
import GameCharacters from "./conponents/GameCharacters/GameCharacters.jsx";
import SelectedCharacters from "./conponents/SelectedCharacters/SelectedCharacters.jsx";
import HistoryOfMoves from "./conponents/HistoryOfMoves/HistoryOfMoves.jsx";
import GameBoard from "./conponents/GameBoard/GameBoard.jsx";
import Winners from "./conponents/Winners/Winners.jsx";

const Game = () => {
  const [elements, setElements] = useState(data);
  const [players, setPlayers] = useState([]);
  const [gameLog, setGameLog] = useState([]);
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState(10);

  const [countWins1, seCountWins1] = useState({ name: "player1", win: 0 });
  const [countWins2, seCountWins2] = useState({ name: "player2", win: 0 });

  const handleRestart = () => {
    setElements(data);
    setPlayers([]);
    setGameLog([]);
    setCounter(0);
  };

  useEffect(() => {
    function winner(elements) {
      const items = elements.map((el) => el.item);
  
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6], [3, 6, 9], [5, 7, 9]
      ];
  
      for (const [a, b, c] of winPatterns) {
        if (items[a] && items[a] === items[b] && items[a] === items[c]) {
          if (players[0] === items[a]) {
            seCountWins1((prev) => ({
              ...prev,
              win: prev.win + 1
            }));
          } else if (players[1] === items[a]) {
            seCountWins2((prev) => ({
              ...prev,
              win: prev.win + 1
            }));
          }
  
          handleRestart();
          return;
        }
      }
    }
  
    winner(elements);
  }, [elements, players]);

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
      setHistory(10);
      setElements(
        elements.map((element) =>
          element.idx === activeIdx && !element.item
            ? { idx: element.idx, item: player }
            : element
        )
      );
    }
  };

  const handleChangeCharacter = (el) => {
    const agreement = confirm("Are you sure? Game settings will be reset");
    if (agreement) {
      setElements(data);
      setPlayers(players.filter((item) => item !== el));
      setGameLog([]);
      setCounter(0);
    }
  };

  const handleHistoryOfMoves = (index) => {
    setHistory(index);
  };

  return (
    <div className="container">
      <GameCharacters
        players={players}
        setPlayers={setPlayers}
        gameElements={gameElements}
      />
      <SelectedCharacters
        onChangeCharacter={handleChangeCharacter}
        players={players}
        handleRestart={handleRestart}
        counter={counter}
        gameLog={gameLog}
      />
      <GameBoard
        history={history}
        elements={elements}
        players={players}
        handleClick={handleClick}
      />
      <Winners countWins1={countWins1} countWins2={countWins2}/>
      <HistoryOfMoves onDeleteMove={handleHistoryOfMoves} gameLog={gameLog} />
    </div>
  );
};

export default Game;
