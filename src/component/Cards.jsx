import React from "react";
import CardsImage from "./CardsImage";

const Cards = () => {
  return (
    <div className="h-[280px] flex flex-col gap-5 rounded-xl shadow-[4px_4px_12px_rgba(0,0,0,0.25)]">
      <CardsImage />
      <div className="px-4 flex flex-col gap-2">
        <h3 className="font-bold">Wisata Air Terjun</h3>
        <div>
          <p className="text-sm">Jl. Manggis VII Bantul, Yogyakarta</p>
          <p className="text-sm">082313452351</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
