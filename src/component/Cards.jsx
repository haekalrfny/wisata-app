import React from "react";

const Cards = ({ src, alt, name, address, city, phone }) => {
  return (
    <div className="w-72 h-[280px] flex flex-col gap-3 rounded-xl shadow-[4px_4px_12px_rgba(0,0,0,0.25)] hover:scale-105 duration-75 cursor-pointer">
      <div className="w-full h-[55%] overflow-hidden rounded-t-xl">
        <img src={src} alt={alt} className="w-full" />
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
