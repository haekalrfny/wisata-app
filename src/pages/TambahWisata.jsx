import React, { useEffect, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Button from "../component/Button";
import Input from "../component/Input";
import SideBar from "../component/SideBar";
import instance from "../api/api";

const TambahWisata = () => {
  const [buttonStatus, setButtonStatus] = useState("create");

  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileChangeHandler = (e) => {
    setPhoto(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setButtonStatus("wait creating...");

    let data = new FormData();
    data.append("name", name);
    data.append("email", email);  
    data.append("phone", phone);
    data.append("address", address);
    data.append("city", city);
    data.append("photo", photo);
    setLoading(true)

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
        setLoading(false)
        setButtonStatus("create");
        navigate("/Dashboard/TabelWisata");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
        setButtonStatus("create");
      });
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="ping"></div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen flex">
        <div className="h-screen flex items-center ">
          <SideBar />
        </div>
        <div className="w-full h-screen flex flex-col">
          <div className="w-full h-40 flex items-end pl-32">
            <h1 className="text-[40px] leading-[48px] text-[#6868ff] font-bold">
              Tambah Wisata
            </h1>
          </div>
  
          <form onSubmit={handleSubmit} className="w-full h-screen flex">
            <div className="w-2/4 h-full  flex justify-center">
              <div className="flex justify-center flex-col gap-14 w-[65%] p-5">
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
            <div className=" w-2/4 h-full flex-col">
              <div className="flex justify-center items-end pb-8 w-full h-[30%] ">
                <Input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Masukkan Alamat"
                />
              </div>
              <div className="w-full h-[70%]">
                <div className="w-full h-[60%] flex justify-center items-center">
                  <div className="w-[60%] h-full  flex justify-center items-center rounded-xl">
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
                <div className="w-full h-[40%] flex justify-center items-start pt-8">
                  <Button button={buttonStatus} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  
};

export default TambahWisata;
