import Button from "../Button/Button.jsx";
import s from "./SelectedCharacters.module.css";
const SelectedCharacters = ({
  onChangeCharacter,
  players = [],
  handleRestart,
  counter,
  gameLog,
}) => {
  return (
    <div className={s.containerMain}>
      <div className={s.info}>
        <p>
          Nuw turn:{" "}
          {players.length === 2 && counter % 2 === 0 ? players[0] : players[1]}
        </p>
        <p>Move number: {gameLog.length}</p>
      </div>

      <div className={s.container}>
        {players.length > 0 ? (
          players.map(
            (item, idx) =>
              idx <= 1 && (
                <button
                  onClick={() => onChangeCharacter(item)}
                  className={s.character}
                  key={`activePlayer-${idx + 1}`}
                >
                  {item}
                </button>
              )
          )
        ) : (
          <>
            <span className={s.characterEmpty}></span>{" "}
            <span className={s.characterEmpty}></span>
          </>
        )}
      </div>
      <Button onClick={handleRestart} />
    </div>
  );
};

export default SelectedCharacters;
