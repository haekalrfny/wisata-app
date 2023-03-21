import React from "react";
import { CiCircleInfo, CiEdit, CiTrash } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import SideBar from "../component/SideBar";

const Tabel = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="h-full flex items-center">
        <SideBar />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <table className="w-[1000px] rounded-[20px] overflow-hidden">
          <thead className="bg-[#F1F2F4] h-16 border">
            <tr>
              <th className=" px-3">No</th>
              <th className="px-3">Nama</th>
              <th className="px-3">Alamat</th>
              <th className="px-3">No. Telepon</th>
              <th className="px-3">Email</th>
              <th className="px-3">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="h-16 border">
              <td>1</td>
              <td>Wisata Air Terjun</td>
              <td>Jl. Manggis Bantul, Yogyakarta</td>
              <td>082313452351</td>
              <td>airterjun.mail.com</td>
              <td>
                <span className="w-full gap-7 flex justify-center ">
                  <NavLink>
                    <CiCircleInfo className="text-2xl" />
                  </NavLink>
                  <NavLink>
                    <CiEdit className="text-2xl" />
                  </NavLink>
                  <NavLink>
                    <CiTrash className="text-2xl" />
                  </NavLink>
                </span>
              </td>
            </tr>
            <tr className="h-16 border">
              <td>2</td>
              <td>Kepulauan Wakatobi</td>
              <td>Jl. Manggis Bantul, Yogyakarta</td>
              <td>082313452351</td>
              <td>airterjun.mail.com</td>
              <td>
                <span className="w-full gap-7 flex justify-center ">
                  <NavLink>
                    <CiCircleInfo className="text-2xl" />
                  </NavLink>
                  <NavLink>
                    <CiEdit className="text-2xl" />
                  </NavLink>
                  <NavLink>
                    <CiTrash className="text-2xl" />
                  </NavLink>
                </span>
              </td>
            </tr>
            <tr className="h-16 border">
              <td>3</td>
              <td>Agrowisata Taman Turi</td>
              <td>Jl. Manggis Bantul, Yogyakarta</td>
              <td>082313452351</td>
              <td>airterjun.mail.com</td>
              <td>
                <span className="w-full gap-7 flex justify-center ">
                  <NavLink>
                    <CiCircleInfo className="text-2xl" />
                  </NavLink>
                  <NavLink>
                    <CiEdit className="text-2xl" />
                  </NavLink>
                  <NavLink>
                    <CiTrash className="text-2xl" />
                  </NavLink>
                </span>
              </td>
            </tr>
            <tr className="h-16 border">
              <td>4</td>
              <td>Cagar Alam Maninjau</td>
              <td>Jl. Manggis Bantul, Yogyakarta</td>
              <td>082313452351</td>
              <td>airterjun.mail.com</td>
              <td>
                <span className="w-full gap-7 flex justify-center ">
                  <NavLink>
                    <CiCircleInfo className="text-2xl" />
                  </NavLink>
                  <NavLink>
                    <CiEdit className="text-2xl" />
                  </NavLink>
                  <NavLink>
                    <CiTrash className="text-2xl" />
                  </NavLink>
                </span>
              </td>
            </tr>
            <tr className="h-16 border">
              <td>5</td>
              <td>Wisata Air Terjun</td>
              <td>Jl. Manggis Bantul, Yogyakarta</td>
              <td>082313452351</td>
              <td>airterjun.mail.com</td>
              <td>
                <span className="w-full gap-7 flex justify-center ">
                  <NavLink>
                    <CiCircleInfo className="text-2xl" />
                  </NavLink>
                  <NavLink>
                    <CiEdit className="text-2xl" />
                  </NavLink>
                  <NavLink>
                    <CiTrash className="text-2xl" />
                  </NavLink>
                </span>
              </td>
            </tr>
            <tr className="h-16 border">
              <td>6</td>
              <td>Wisata Air Terjun</td>
              <td>Jl. Manggis Bantul, Yogyakarta</td>
              <td>082313452351</td>
              <td>airterjun.mail.com</td>
              <td>
                <span className="w-full gap-7 flex justify-center ">
                  <NavLink>
                    <CiCircleInfo className="text-2xl" />
                  </NavLink>
                  <NavLink>
                    <CiEdit className="text-2xl" />
                  </NavLink>
                  <NavLink>
                    <CiTrash className="text-2xl" />
                  </NavLink>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabel;
