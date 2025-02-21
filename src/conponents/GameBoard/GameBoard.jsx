import s from "./GameBoard.module.css";

const GameBoard = ({ history, elements = [], players = [], handleClick }) => {
  return (
    <div className={s.itemsContainer}>
      {elements.map(({ idx, item }) => (
        <button
          className={s.boardItem}
          disabled={players.length !== 2 || item}
          onClick={() => handleClick(idx)}
          key={idx}
        >
          <span
            style={history >= idx ? { display: "flex" } : { display: "none" }}
          >
            {item}
          </span>
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
