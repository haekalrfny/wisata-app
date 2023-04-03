import React, { useEffect, useState } from "react";
import Input from "../component/Input";
import Button from "../component/Button";
import { NavLink, useNavigate } from "react-router-dom";
import instance from "../api/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      password_confirmation === ""
    ) {
      return false;
    }

    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("password_confirmation", password_confirmation);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/register",
      headers: {},
      data: data,
    };

    instance
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        navigate("/");
        console.log(berhasil);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form id="register-form"
        className="w-[350px] h-[500px] rounded-xl bg-white absolute shadow-[4px_4px_12px_rgba(0,0,0,0.25)]"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center w-full p-10">
          <h1 className="text-[35px] leading-[40px] font-bold text-[#6889FF]">
            Register
          </h1>
        </div>
        <div className="flex justify-center flex-col gap-3 w-full p-5">
          <Input
            type="text"
            placeholder="Masukkan Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Masukkan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Masukkan Konfirmasi Password"
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <Button button="Button" />
        </div>
        <div className="w-full ml-10 mt-2">
          <p>
            Sudah memiliki akun,
            <NavLink to="/" className="text-[#0038FF] pl-1">
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
