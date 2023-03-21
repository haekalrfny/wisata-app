import React, { useState } from "react";
import { CiCircleRemove, CiHome } from "react-icons/ci";
import { CiStickyNote } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const active = ({isActive}) => {
    return isActive ? "text-3xl text-[#0038FF]" : "text-3xl";
  };
  return (
    <>
      <div
        id="sidebar"
        className="h-[450px] w-[70px] px-5 py-6 flex flex-col justify-between shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-[0px_20px_20px_0px]"
      >
        <div className="flex flex-col gap-8">
          <NavLink to="/Dashboard" className={active}>
            <CiHome />
          </NavLink>
          <NavLink to="/TabelWisata" className={active}>
            <CiStickyNote />
          </NavLink>
          <NavLink to="/TambahWisata" className={active}>
            <CiCirclePlus />
          </NavLink>
          <NavLink to="/UbahWisata" className={active}>
            <CiEdit />
          </NavLink>
        </div>
        <div>
          <NavLink onClick={() => setShow(true)} className="text-3xl">
            <CiLogout />
          </NavLink>
        </div>
      </div>

      {show ? (
        <div className="fixed w-full h-screen bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-[500px] h-[300px] rounded-[20px] bg-[#FFFFFF] flex flex-col">
            <div className="w-full h-[15%]  flex justify-end items-center px-4">
              <NavLink onClick={() => setShow(false)}>
                <CiCircleRemove className="text-2xl text-[#515151]" />
              </NavLink>
            </div>
            <div className="w-full h-[85%]  flex flex-col items-center justify-center gap-16 pb-5">
              <div>
                <h1 className="text-[25px] text-[#6889ff] font-extrabold">
                  Anda yakin ingin Logout?
                </h1>
              </div>
              <div className="flex gap-10">
                <NavLink
                  onClick={() => setShow(false)}
                  className="bg-[#f6f6f6] px-14 py-2 font-extrabold text-sm rounded-[12px] text-[#515151]"
                >
                  Batal
                </NavLink>
                <NavLink to='/Login' className="bg-[#6889ff] hover:bg-[#3D62E6] px-14 py-2 font-extrabold text-sm rounded-[12px] text-[#FFFFFF]">
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SideBar;