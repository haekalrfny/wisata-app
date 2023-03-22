import React from "react";
import DetailImage from "../component/DetailImage";
import { SlArrowLeft } from "react-icons/sl";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Detail = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full h-[15%] flex items-end py-5 justify-center">
        <div className="w-[700px] flex gap-10 items-center">
          <NavLink to='/Dashboard'>
          <SlArrowLeft className="text-3xl" />
          </NavLink>
          <h2 className="text-3xl font-bold leading-[39px] text-black">
            Wisata Air Terjun
          </h2>
        </div>
      </div>
      <div className="w-full h-[60%]  flex justify-center">
        <DetailImage />
      </div>
      <div className="w-full h-[25%] flex flex-col items-center">
        <div className="w-[700px] h-full flex flex-col gap-2 py-5">
          <span className="flex items-center gap-3">
            <span className="p-1 bg-[#6889ff] rounded-lg">
              <CiLocationOn className="text-xl text-white" />
            </span>
            <p>Jl. Manggis VII Bantul, Yogyakarta</p>
          </span>
          <span className="flex items-center gap-3">
            <span className="p-1 bg-[#6889ff] rounded-lg">
              <CiMail className="text-xl text-white" />
            </span>
            <p>airterjun.mail.com</p>
          </span>
          <span className="flex items-center gap-3">
            <span className="p-1 bg-[#6889ff] rounded-lg">
              <CiPhone className="text-xl text-white" />
            </span>
            <p>082313452351</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
