import { CiSearch } from "react-icons/ci";

const Search = ({value,onChange}) => {
  return (
    <div  className="h-[40px] rounded-[36px] flex justify-between shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div className="w-full h-full flex items-center pl-2 gap-3">
        <span className="text-2xl flex items-center">
          <CiSearch />
        </span>
        <input id="input-search" type="text" className="border-none h-full outline-none" placeholder="Cari sesuatu?" value={value} onChange={(e) => onChange(e.target.value)} />
      </div>
      <button className="bg-[#6889FF] hover:bg-[#3D62E5] rounded-[36px] text-white font-bold px-7 text-sm">
        Cari
      </button>
    </div>
  );
};

export default Search;
