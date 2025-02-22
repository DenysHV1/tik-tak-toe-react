import { useState } from "react";
import s from "./ChangePlayerName.module.css";

const ChangePlayerName = ({ onTakeNames }) => {
  const [position, setPosition] = useState({ x: 143, y: 590 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleSubmitNames = (e) => {
    e.preventDefault();
    const firstPlayer = e.target.elements.player1.value.trim();
    const secondPlayer = e.target.elements.player2.value.trim();
    if (firstPlayer.length > 10 || secondPlayer.length > 10) {
      return alert("Name is too long!");
    }
    onTakeNames(firstPlayer, secondPlayer);
  };

  return (
    <form
      className={s.form}
      onSubmit={handleSubmitNames}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: dragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Чтобы остановить перетаскивание при выходе за пределы
    >
      <input className={s.input} type="text" name="player1" placeholder="First player" />
      <input className={s.input} type="text" name="player2" placeholder="Second player" />
      <button className={s.button} type="submit">Change name</button>
    </form>
  );
};

export default ChangePlayerName;
