import React from "react";
import { useNavigate } from "react-router-dom";
import CardsImage from "./CardsImage";

const Cards = ({ key, src, alt, name, address, city, phone }) => {
  const navigate = useNavigate();

  const clickCards = () => {
    navigate("/Dashboard/DetailWisata");
  };

  return (
    <div
      key={key}
      onClick={clickCards}
      className="w-72 h-[280px] flex flex-col gap-3 rounded-xl shadow-[4px_4px_12px_rgba(0,0,0,0.25)] cursor-pointer hover:scale-105 duration-75"
    >
      <div className="w-full h-[55%] overflow-hidden rounded-t-xl">
        <img src={src} alt={alt} />
      </div>
      <div className="px-4 h-[35%] flex flex-col justify-center gap-2">
        <h3 className="font-bold">{name}</h3>
        <div>
          <p className="text-sm">
            {address}, {city}
          </p>
          <p className="text-sm">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
