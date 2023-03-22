import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../component/Cards";
import Search from "../component/Search";
import SideBar from "../component/SideBar";
import instance from "../api/api";

const DashBoard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const userName = localStorage.getItem("userName");

  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
      if (!userToken || userToken === "undefined") {
        return navigate("/");
      }
    };
    checkUserToken();
  }, []);

  useEffect(() => {
    setLoading(true);
    const getData = () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "/index",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      instance
        .request(config)
        .then((response) => {
          setLoading(false);
          setData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
  
<div class="ping"></div>
      </div>
    );
  } else {
    return (
      <div className="w-full ">
        <div className="h-full fixed flex items-center">
          <SideBar />
        </div>
        <div className="w-full h-screen flex flex-col">
          <div className="w-full pl-16 pt-10 flex items-center justify-around">
            <div>
              <h1 className="text-4xl font-bold ">Hi, {userName}!</h1>
            </div>
            <div>
              <Search />
            </div>
          </div>
          <div className=" grow flex justify-center p-16 flex-wrap gap-8 ml-16">
            {data?.map((item) => {
              return (
                <Cards
                  key={item.id}
                  src={item.photo}
                  alt={item.name}
                  name={item.name}
                  address={item.address}
                  city={item.city}
                  phone={item.phone}
                />
              );
            })}
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
  }
};

export default DashBoard;
