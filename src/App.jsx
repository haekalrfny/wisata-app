import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import Tabel from "./pages/Tabel";
import TambahWisata from "./pages/TambahWisata";
import Detail from "./pages/Detail";
import UbahWisata from "./pages/UbahWisata";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Dashboard/Home" element={<DashBoard />} />
          <Route path="/Dashboard/DetailWisata/:id" element={<Detail />} />
          <Route path="/Dashboard/TabelWisata" element={<Tabel />} />
          <Route path="/Dashboard/TambahWisata" element={<TambahWisata />} />
          <Route path="/Dashboard/UbahWisata" element={<UbahWisata />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
