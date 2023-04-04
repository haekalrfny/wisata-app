import React, { useEffect, useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import instance from "../api/api";

const Detail = () => {
  const { id } = useParams();

  const [data, setData] = useState();

  const [loading, setLoading] = useState(false);
  
  const userName = localStorage.getItem("userName");

  const navigate = useNavigate()

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
        url: `/show/${id}`,
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
        <div className="leap-frog">
<div className="leap-frog__dot"></div>
<div className="leap-frog__dot"></div>
<div className="leap-frog__dot"></div>
</div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen">
        {data?.map((item) => {
          return (
            <div
              id="d-parent"
              key={item.id}
              className="w-full h-screen flex flex-col justify-center items-center"
            >
              <div id="dt-parent" className="w-full h-[15%] flex items-end py-5 justify-center">
                <div id="dt-child" className="w-[700px] flex gap-10 items-center">
                  <div id="dfont-parent">
                  <NavLink to="/Dashboard/Home">
                    <SlArrowLeft id="d-icon" className="text-3xl" />
                    </NavLink>
                    <h1 id="d-font" className="text-4xl font-medium hidden">
                Halo,
                <span id="d-font" className="text-4xl font-bold">
                  {userName}!
                </span>
              </h1>
                  </div>
                  <h2 id="d-name" className="text-3xl font-bold leading-[39px] text-black">
                    {item.name}
                  </h2>
                </div>
              </div>
              <div id="dm-parent" className="w-full h-[60%]  flex justify-center">
                <img
                  id="dm-child"
                  src={item.photo}
                  alt=""
                  className="mr-12 w-[650px] rounded-xl bg-cover"
                />
              </div>
              <div id="dbot-parent" className="w-full h-[25%] flex flex-col items-center">
                <div id="dbot-child" className="w-[700px] h-full flex flex-col gap-2 py-5">
                  <span className="flex items-center gap-3">
                    <span className="p-1 bg-[#6889ff] rounded-lg">
                      <CiLocationOn id="dbot-size" className="text-xl text-white" />
                    </span>
                    <p id="dbot-size">
                      {item.address}, {item.city}
                    </p>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="p-1 bg-[#6889ff] rounded-lg">
                      <CiMail id="dbot-size" className="text-xl text-white" />
                    </span>
                    <p id="dbot-size">{item.email}</p>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="p-1 bg-[#6889ff] rounded-lg">
                      <CiPhone id="dbot-size" className="text-xl text-white" />
                    </span>
                    <p id="dbot-size">{item.phone}</p>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Detail;
