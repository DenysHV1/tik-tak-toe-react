import s from "./Winners.module.css";
const Winners = ({ countWins1, countWins2 }) => {
  return (
    <div className={s.container}>
      <p className={s.winner}>
        {countWins1.name}:
        <span
          style={
            countWins2.win <= countWins1.win
              ? { color: "#00ff00" }
              : { color: "red" }
          }
        >
          {countWins1.win};
        </span>
      </p>
      <p className={s.winner}>
        {countWins2.name}:
        <span
          style={
            countWins2.win >= countWins1.win
              ? { color: "#00ff00" }
              : { color: "red" }
          }
        >
          {countWins2.win};
        </span>
      </p>
    </div>
  );
};

export default Winners;
