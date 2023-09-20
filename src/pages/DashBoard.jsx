import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Cards from "../component/Cards";
import Search from "../component/Search";
import SideBar from "../component/SideBar";
import instance from "../api/api";
import { CiMenuBurger } from "react-icons/ci";

const DashBoard = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const userName = localStorage.getItem("userName");
  
  const [showSidebar, setShowSidebar] = useState(false)

  const handleClickSidebar = () => {
    setShowSidebar(false)
  }

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

  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(results);
  }, [searchQuery, data]);

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
      <>
      <div className="w-full ">
        <div id="db-sidebar" className="h-full fixed flex items-center">
          <SideBar />
          </div>
          {showSidebar ? (
            <div onClick={handleClickSidebar} className="w-full h-screen fixed bg-black bg-opacity-50">
              <SideBar/> 
          </div>
        ) : null}
        <div className="w-full h-screen flex flex-col">
          <div
            id="db-top"
            className="ml-[71px] pt-10 flex items-center justify-center gap-60"
          >
            <div id="db-nav">
                  <NavLink onClick={() => setShowSidebar(true)} id="db-icon" className='hidden'>
                  <CiMenuBurger className="text-4xl " />
                  </NavLink>
              <h1 id="db-font" className="text-4xl font-medium">
                Halo
                <span id="db-font" className="text-4xl font-bold">
                  , {userName}!
                </span>
              </h1>
            </div>
            <div id="db-search">
              <Search value={searchQuery} onChange={setSearchQuery} />
            </div>
          </div>
          {searchResult.length > 0 ? (
            <div
              id="db-mid"
              key={id}
              className="flex grow justify-center p-16 flex-wrap gap-8 ml-[71px]"
            >
              {searchResult?.map((item) => {
                return (
                  <NavLink to={`/Dashboard/DetailWisata/${item.id}`}>
                    <Cards
                      key={item.id}
                      src={item.photo}
                      alt={item.name}
                      name={item.name}
                      address={item.address}
                      city={item.city}
                      phone={item.phone}
                    />
                  </NavLink>
                );
              })}
            </div>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <p className="text-xl text-slate-700">gaada!</p>
            </div>
          )}

          <div>
            <footer className="w-full bg-[#6889FF] text-white flex flex-col text-sm items-center py-5 ">
              <p>Footer Component</p>
              <p>Copyright 2023 All Right reserved</p>
            </footer>
          </div>
        </div>
        </div>

        
        </>
    );
  }
};

export default DashBoard;
