import s from "./GameCharacters.module.css";

import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const GameCharacters = ({ players = [], setPlayers, gameElements = [] }) => {
  const handleChoice = (player) => {
    if (players.length < 2) {
      setPlayers((prevPlayers) =>
        player !== prevPlayers[0] ? [...prevPlayers, player] : [...prevPlayers]
      );
    }
  };
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      slidesPerView={4}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      spaceBetween={10}
    >
      {gameElements.map((item, idx) => (
        <SwiperSlide key={`game-el-${idx}`}>
          <button className={s.character} onClick={() => handleChoice(item)}>
            {item}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GameCharacters;
