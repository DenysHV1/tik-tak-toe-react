import s from "./HistoryOfMoves.module.css"

const HistoryOfMoves = ({ gameLog = [] }) => {
  return (
    <ul className={s.list}>
      {gameLog.length > 0 &&
        gameLog.map(({ idx, item }) => (
          <li className={s.item} key={`log-${idx}`}>
            Player: {item}, clicked: {idx} point
          </li>
        ))}
    </ul>
  );
};

export default HistoryOfMoves;
