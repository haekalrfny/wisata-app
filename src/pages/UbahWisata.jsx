import React from "react";
import Button from "../component/Button";
import Input from "../component/Input";
import SideBar from "../component/SideBar";
import UbahImage from "../component/UbahImage";

const UbahWisata = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="h-screen flex items-center ">
        <SideBar />
      </div>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-40 flex items-end pl-32">
          <h1 className="text-[40px] leading-[48px] text-[#6868ff] font-bold">
            Ubah Wisata
          </h1>
        </div>
        <div className="w-full h-screen flex">
          <div className="w-2/4 h-full  flex justify-center">
            <div className="flex justify-center flex-col gap-14 w-[65%] p-5">
              <Input type="text" value='Wisata Air Terjun' />
              <Input type="email" value='airterjun@mail.com' />
              <Input type="text" value='082313452351' />
              <Input type="text" value='Yogyakarta' />
            </div>
          </div>
          <div className=" w-2/4 h-full flex-col">
            <div className="flex justify-center items-end pb-8 w-full h-[30%] ">
              <Input type="text" value='Jl. Manggis VII Bantul' />
            </div>
            <div className="w-full h-[70%]">
              <div className="w-full h-[60%] flex justify-center items-center">
                <UbahImage/>
              </div>
              <div className="w-full h-[40%] flex justify-center items-start pt-8">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbahWisata;
