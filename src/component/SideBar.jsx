import React, { useState } from "react";
import { CiCircleRemove, CiHome } from "react-icons/ci";
import { CiStickyNote } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [show, setShow] = useState(false);
  const active = ({ isActive }) => {
    return isActive
      ? "text-3xl text-[#0038FF] scale-105"
      : "text-3xl hover:scale-105 duration-75";
  };
  return (
    <>
      <div
        id="sidebar"
        className="h-[450px] w-[70px] px-5 py-6 flex flex-col justify-between shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-[0px_20px_20px_0px]"
      >
        <div className="h-[50%] flex flex-col justify-center gap-8">
          <NavLink to="/Dashboard/Home" className={active}>
            <CiHome />
          </NavLink>
          <NavLink to="/Dashboard/TabelWisata" className={active}>
            <CiStickyNote />
          </NavLink>
          <NavLink to="/Dashboard/TambahWisata" className={active}>
            <CiCirclePlus />
          </NavLink>
        </div>
        <div className="h-[50%] flex items-end">
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
                <NavLink
                  to="/"
                  className="bg-[#6889ff] hover:bg-[#3D62E6] px-14 py-2 font-extrabold text-sm rounded-[12px] text-[#FFFFFF]"
                >
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
