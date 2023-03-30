import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../component/Button";
import Input from "../component/Input";
import SideBar from "../component/SideBar";
import instance from "../api/api";

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
      <div className="h-screen flex items-center ">
        <SideBar />
      </div>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-40 flex items-end pl-32">
          <h1 className="text-[40px] leading-[48px] text-[#6868ff] font-bold">
            Ubah Wisata
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="w-full h-screen flex">
          <div className="w-2/4 h-full  flex justify-center">
            <div className="flex justify-center flex-col gap-14 w-[65%] p-5">
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
          <div className=" w-2/4 h-full flex-col">
            <div className="flex justify-center items-end pb-8 w-full h-[30%] ">
              <Input
                value={address}
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="w-full h-[70%]">
              <div className="w-full h-[60%] flex justify-center items-center">
                <div className="w-[60%] h-full bg-[#f6f6f6] flex justify-center items-center rounded-xl">
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
              <div className="w-full h-[40%] flex justify-center items-start pt-8">
                <Button button="Update" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UbahWisata;
