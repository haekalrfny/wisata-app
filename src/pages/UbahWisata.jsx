import React from "react";
import Button from "../component/Button";
import Input from "../component/Input";
import SideBar from "../component/SideBar";

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
              <Input type="text"  />
              <Input type="email"  />
              <Input type="text"  />
              <Input type="text"  />
            </div>
          </div>
          <div className=" w-2/4 h-full flex-col">
            <div className="flex justify-center items-end pb-8 w-full h-[30%] ">
              <Input type="text"  />
            </div>
            <div className="w-full h-[70%]">
              <div className="w-full h-[60%] flex justify-center items-center">
                <div className="w-[60%] h-full bg-[#f6f6f6] flex justify-center items-center rounded-xl">
                  <img src="" alt="" />
                </div>
              </div>
              <div className="w-full h-[40%] flex justify-center items-start pt-8">
                <Button button='Update' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbahWisata;
