import { useState } from "react";
import { CiCircleRemove, CiHome, CiStickyNote, CiCirclePlus, CiLogout } from "react-icons/ci";
import { NavLink} from "react-router-dom";

const SideBar = () => {

  const userName = localStorage.getItem("userName");

  const [show, setShow] = useState(false);

  const active = ({ isActive }) => {
    return isActive
      ? "text-3xl text-[#0038FF] scale-110"
      : "text-3xl hover:scale-110 duration-75";
  };

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem('email')
  };

  return (
    <>
      <div id="sb-parent"
        className="h-[450px] fixed w-[70px] px-5 py-6 flex flex-col justify-between shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-[0px_20px_20px_0px]"
      >
        <div id="sb-icon-parent" className="h-[50%] flex flex-col justify-center gap-8">
        <h1 id="sb-font" className="text-4xl font-medium hidden">
                Halo 
                <span id="sb-font" className="text-4xl font-bold">, {userName}!
                </span>
              </h1>
          <NavLink id="sb-icon-child" to="/Dashboard/Home" className={active}>
            <CiHome id="icon-sb" className="h-full" />
            <p id="sb-icon-child-2" className="hidden">Beranda</p>
          </NavLink>
          <NavLink id="sb-icon-child" to="/Dashboard/TabelWisata" className={active}>
            <CiStickyNote id="icon-sb" className="h-full" />
            <p id="sb-icon-child-2" className="hidden">Tabel</p>
          </NavLink>
          <NavLink id="sb-icon-child" to="/Dashboard/TambahWisata" className={active}>
            <CiCirclePlus id="icon-sb" className="h-full" />
            <p id="sb-icon-child-2" className="hidden">Tambah</p>
          </NavLink>
        </div>
        <div id="sb-icon-parent-2" className="h-[50%] flex items-end">
          <NavLink
            onClick={() => setShow(true)}
            className="text-3xl hover:scale-110 duration-75"
          >
            <CiLogout id="icon-sb-2" className="h-auto" />
            <p id="sb-icon-child-3" className="hidden">Keluar</p>
          </NavLink>
          <NavLink to='/' onClick={logOut} id="sb-logout" className='text-3xl hover:scale-110 duration-75 hidden'>
            <CiLogout id="icon-sb-3" className="h-auto" />
            <p id="sb-icon-child-4" className="hidden">Keluar</p>
          </NavLink>
        </div>
      </div>

      {show ? (
        <div id="logout" className="z-[9999] fixed w-full h-screen bg-black bg-opacity-50 flex justify-center items-center">
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
                  onClick={( ) => setShow(false)}
                  className="bg-[#f6f6f6] px-14 py-2 font-extrabold text-sm rounded-[12px] text-[#515151]"
                >
                  Batal
                </NavLink>
                <NavLink
                  to="/"
                  onClick={logOut}
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
