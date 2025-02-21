import s from './GameBoard.module.css'

const GameBoard = ({ elements = [], players = [], handleClick }) => {
  return (
    <div className={s.itemsContainer}>
      {elements.map(({ idx, item }) => (
        <button
        className={s.boardItem}
          disabled={players.length !== 2 || item}
          onClick={() => handleClick(idx)}
          key={idx}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
