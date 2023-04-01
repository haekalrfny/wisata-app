import React, { useEffect, useState } from "react";
import { CiCircleInfo, CiEdit, CiTrash } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import SideBar from "../component/SideBar";
import instance from "../api/api";

const Tabel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const deleteData = (id) => {
    let config = {
      method: "post",
      url: `/delete/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    setLoading(true);
    instance
      .request(config)
      .then((response) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
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
      <div id="tabel-page-parent" className="w-full h-screen">
        <div className="h-full fixed flex items-center ">
          <SideBar />
        </div>
        <div id="tabel-page-child" className="w-full h-screen ">
          <div className="w-full h-screen flex flex-col justify-center items-center">
          <div id="tabel-text" className="w-[62%] mb-10">
          <h1 className="text-[40px] leading-[48px] text-[#6868ff] font-bold">
              Tabel Wisata
            </h1>
          </div>
            <table id="tabel-parent" className=" rounded-[20px] overflow-hidden text-xs">
              <thead className="bg-[#F1F2F4] h-16 border text-center">
                <tr>
                  <th className=" mx-3 px-5">No</th>
                  <th className="mx-3">Nama</th>
                  <th className="mx-3">Alamat</th>
                  <th className="mx-3">No. Telepon</th>
                  <th className="mx-3">Email</th>
                  <th className="mx-3">Aksi</th>
                </tr>
              </thead>
              {data?.map((item, index) => {
                return (
                  <tbody key={item.id} className=" h-16 text-center ">
                    <tr className=" border">
                      <td className="px-3">{index + 1}</td>
                      <td className="px-3">{item.name}</td>
                      <td className="px-3">
                        {item.address}, {item.city}
                      </td>
                      <td className="px-3">{item.phone}</td>
                      <td className="px-3">{item.email}</td>
                      <td>
                        <span className="w-full px-10 gap-7 flex justify-center ">
                          <NavLink to={`/Dashboard/DetailWisata/${item.id} `}>
                            <CiCircleInfo className="text-xl hover:scale-110 duration-75" />
                          </NavLink>
                          <NavLink to={`/Dashboard/UbahWisata/${item.id}`}>
                            <CiEdit className="text-xl hover:scale-110 duration-75" />
                          </NavLink>
                          <NavLink>
                            <button onClick={() => deleteData(item.id)}>
                              <CiTrash className="text-xl hover:scale-110 duration-75" />
                            </button>
                          </NavLink>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          
        </div>
      </div>
    );
  }
};

export default Tabel;
