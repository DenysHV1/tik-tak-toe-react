import s from "./HistoryOfMoves.module.css"

const HistoryOfMoves = ({onDeleteMove, gameLog = [] }) => {
  return (
    <ul className={s.list}>
      {gameLog.length > 0 &&
        gameLog.map(({ idx, item }) => (
          <li onClick={() => onDeleteMove(idx)} className={s.item} key={`log-${idx}`}>
            Player: {item}, clicked: {idx} point
          </li>
        ))}
    </ul>
  );
};

export default HistoryOfMoves;
