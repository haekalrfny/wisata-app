import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../component/Button";
import Input from "../component/Input";
import SideBar from "../component/SideBar";
import instance from "../api/api";
import { CiMenuBurger } from "react-icons/ci";

const UbahWisata = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState(null);
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
          setName(response.data.data[0].name);
          setEmail(response.data.data[0].email);
          setPhone(response.data.data[0].phone);
          setAddress(response.data.data[0].address);
          setCity(response.data.data[0].city);
          setImage(response.data.data[0].photo)
          fetch(response.data.data[0].photo)
            .then((response) => response.blob())
            .then((res) => {
              const file = new File([res], 'image', { type: res.type, })
              setPhoto(file)
              
            })
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  const fileChangeHandler = (e) => {
    setPhoto(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("phone", phone);
    data.append("address", address);
    data.append("city", city);
    data.append("photo", photo);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `/UP/${id}`,
      headers: {
        Authorization: `Bearer  ${localStorage.getItem("token")}`,
      },
      data: data,
    };

    instance
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigate("/Dashboard/Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-screen flex">
      <div id="tw-sidebar" className="h-screen fixed flex items-center ">
        <SideBar />
      </div>
      <div id="uw-parent" className="w-full h-screen flex flex-col">
      <div className="hidden" id="uw-top-1">
              <div id="uw-icon" className="hidden">
                <CiMenuBurger className="text-4xl " />
              </div>
              <h1 id="uw-font" className="text-4xl font-medium">
                Halo,
                <span id="uw-font" className="text-4xl font-bold">
                  {userName}!
                </span>
              </h1>
            </div>
        <div id="uw-top-2" className="w-full h-40 flex items-end pl-36">
          <h1 className="text-[40px] leading-[48px] text-[#6868ff] font-bold">
            Ubah Wisata
          </h1>
        </div>
        <form id="uw-bot" onSubmit={handleSubmit} className="w-full h-screen flex">
          <div id="uw-input-1" className="w-2/4 h-full  flex justify-center">
            <div id="input-uw" className="flex justify-center flex-col gap-14 w-[65%] p-5">
              <Input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                value={phone}
                type="text"
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                value={city}
                type="text"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div id="uw-input-2" className=" w-2/4 h-full flex flex-col items-center">
            <div id="uw-input-alamat-parent" className="flex justify-center items-end pb-8 w-full h-[30%] ">
              <input
                id="uw-input-alamat-child"
                value={address}
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                className=' bg-[#f6f6f6] rounded-[8px] h-5 p-6 outline-none w-[65%]'
              />
            </div>
              <div id="uw-pic-parent" className="w-full h-[45%] flex justify-center items-center">
                <div id="uw-pic-child" className="w-[65%] h-full bg-[#f6f6f6] flex justify-center items-center rounded-xl">
                  {image ? (
                    <img
                      className="rounded-xl bg-cover w-full h-full cursor-pointer"
                      src={image}
                      alt={name}
                      onClick={() => {
                        document.querySelector("#input-file").click();
                      }}
                    />
                  ) : (
                    <div
                      onClick={() => {
                        document.querySelector("#input-file").click();
                      }}
                      className="w-full h-full cursor-pointer rounded-xl"
                    >
                      <img src={image} alt={name} className='rounded-xl bg-cover w-full h-full' />
                    </div>
                  )}
                  <input
                    type="file"
                    className="hidden"
                    id="input-file"
                    onChange={fileChangeHandler}
                  />
                </div>
              </div>
              <div id="uw-button-parent" className="w-full h-[25%] flex justify-center items-start pt-8">
                <button id="uw-button-child" className="bg-[#6889FF] hover:bg-[#3D62E5] w-[65%] h-[48px] rounded-[8px] text-white font-bold text-[16px]">Create</button>
              </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UbahWisata;
