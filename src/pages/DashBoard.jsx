import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../component/Cards";
import Search from "../component/Search";
import SideBar from "../component/SideBar";

const DashBoard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
      if (!userToken || userToken === "undefined") {
        return navigate("/");
      }
    };
    checkUserToken();
  }, []);

  return (
    <div className="w-full ">
      <div className="h-full fixed flex items-center">
        <SideBar />
      </div>
      <div className="w-full h-screen flex flex-col">
        <div className="py-5 flex items-center justify-end pr-40 pt-10">
          <Search />
        </div>
        <div className=" grow flex justify-center p-16 flex-wrap gap-8 ml-16">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div>
          <footer className="w-full bg-[#6889FF] text-white flex flex-col text-sm items-center py-8 ">
            <p>Footer Component</p>
            <p>Copyright 2023 All Right reserved</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
