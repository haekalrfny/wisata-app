import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../component/Button";
import CheckBox from "../component/CheckBox";
import Input from "../component/Input";
import instance from "../api/api";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email === "" && password === "") {
      return false;
    }

    let data = new FormData();
    data.append("email", email);
    data.append("password", password);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/login",
      headers: {},
      data: data,
    };

    instance
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userName", response.data.user.name);
          navigate("/Dashboard/Home");
        } else {
          alert("email atau password salah");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        alert('gagal login')

      });
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form id="login-form"
        className=" w-[350px] h-[500px] rounded-xl absolute shadow-[4px_4px_12px_rgba(0,0,0,0.25)]"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex justify-center p-16">
          <h1 className="text-[35px] leading-[40px] font-bold text-[#6889FF]">
            Login
          </h1>
        </div>
        <div className="flex justify-center flex-col gap-3 w-full p-5">
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
        </div>
        <div className="flex justify-center">
          <Button button='Button' />
        </div>
        <div className="w-full flex flex-col ml-10 mt-2 gap-5">
          <CheckBox />
          <div>
            <p>
              Belum memiliki akun,
              <NavLink to="/Register" className="text-[#0038FF] pl-1">
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
