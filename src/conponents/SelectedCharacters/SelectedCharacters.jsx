import s from "./SelectedCharacters.module.css";
const SelectedCharacters = ({onChangeCharacter, players = [] }) => {
  console.log(players);
  
  return (
    <div className={s.container}>
      {players.length > 0 ? (
        players.map(
          (item, idx) =>
            idx <= 1 && (
              <button onClick={() => onChangeCharacter(item)} className={s.character} key={`activePlayer-${idx + 1}`}>
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
  );
};

export default SelectedCharacters;
