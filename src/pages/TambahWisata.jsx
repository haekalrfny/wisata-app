import React, { useEffect, useState } from "react";
import { CiImageOn, CiMenuBurger } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../component/Button";
import Input from "../component/Input";
import SideBar from "../component/SideBar";
import instance from "../api/api";

const TambahWisata = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const userName = localStorage.getItem("userName");
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    const checkUserToken = () => {
      const userToken = localStorage.getItem("token");
      if (!userToken || userToken === "undefined") {
        return navigate("/");
      }
    };
    checkUserToken();
  }, []);

  const handleClickSidebar = () => {
    setShowSidebar(false)
  }

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
    setLoading(true);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/create",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: data,
    };

    instance
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setLoading(false);
        navigate("/Dashboard/Home");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

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
      <div className="w-full h-screen flex">
        <div id="tw-sidebar" className="h-screen fixed flex items-center ">
          <SideBar />
        </div>
        {showSidebar ? (
          <div onClick={handleClickSidebar} className="w-full h-screen fixed bg-black bg-opacity-50">
            <SideBar/> 
          </div>
        ) : null}
        <div id="tw-parent" className="w-full h-screen flex flex-col">
        <div className="hidden" id="tw-top-1">
              <NavLink onClick={() => setShowSidebar(true)} id="tw-icon">
                <CiMenuBurger className="text-4xl " />
              </NavLink>
              <h1 id="tw-font" className="text-4xl font-medium">
                Halo,
                <span id="tw-font" className="text-4xl font-bold">
                  {userName}!
                </span>
              </h1>
            </div>
          <div
            id="tw-top-2"
            className="w-full h-40 flex items-end pl-36"
          >
            <h1 className="text-[40px] leading-[48px] text-[#6868ff] font-bold">
              Tambah Wisata
            </h1>
          </div>

          <form
            id="tw-bot"
            onSubmit={handleSubmit}
            className="w-full h-screen flex"
          >
            <div
              id="tw-input-1"
              className="w-2/4 h-full flex justify-center"
            >
              <div
                id="input-tw"
                className="flex justify-center flex-col gap-14 w-[65%] p-5"
              >
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan Nama wisata"
                />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan Email"
                />
                <Input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Masukkan No. Telepon"
                />
                <Input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Masukkan Kota"
                />
              </div>
            </div>
            <div
              id="tw-input-2"
              className=" w-2/4 h-full flex flex-col items-center"
            >
              <div
                id="tw-input-alamat-parent"
                className="flex justify-center items-end pb-8 w-full h-[30%]"
              >
                <input
                  id="tw-input-alamat-child"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Masukkan Alamat"
                  className=" bg-[#f6f6f6] rounded-[8px] h-5 p-6 outline-none w-[65%]"
                />
              </div>
              <div id="tw-pic-parent" className="w-full h-[45%] flex justify-center items-center">
                <div id="tw-pic-child" className="w-[65%] h-full flex justify-center items-center rounded-xl">
                  {image ? (
                    <img
                      className="w-full h-full rounded-xl"
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
                      className="w-full h-full flex justify-center items-center flex-col cursor-pointer rounded-xl bg-[#f6f6f6] hover:bg-[#d1d1d1]"
                    >
                      <span>
                        <CiImageOn className="text-4xl" />
                      </span>
                      <p>Masukkan Gambar</p>
                      <p>file must be : jpg, jpeg, png.</p>
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
              <div id="tw-button-parent" className="w-full h-[25%] flex justify-center items-start pt-8 ">
                <button id="tw-button-child" className="bg-[#6889FF] hover:bg-[#3D62E5] w-[65%] h-[48px] rounded-[8px] text-white font-bold text-[16px]">
                  create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default TambahWisata;
