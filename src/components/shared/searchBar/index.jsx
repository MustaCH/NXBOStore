import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const newSearch = data.filter((value) => {
      return (
        value.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        value.cat.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    if (searchTerm === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newSearch);
    }
  };

  return (
    <form className="relative w-full lg:w-1/2 group">
      <div className="w-full relative z-10 ">
        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-600" />
        <input
          type="text"
          onChange={handleFilter}
          placeholder={placeholder}
          className="bg-zinc-900 w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none border-2 border-transparent focus:border-orange-500"
        />
      </div>
      {filteredData.length !== 0 && (
        <ul className="absolute flex flex-col rounded-bl-lg rounded-br-lg justify-start w-full z-50 bg-zinc-800 p-5 shadow-2xl max-h-96 min-h-fit overflow-auto">
          {filteredData.map((value, key) => {
            return (
              <Link
                to={`./cat/product-list/${value.id}`}
                key={key}
                className="flex items-center gap-4 text-white p-2 my-1 bg-zinc-900 border-2 border-transparent rounded-lg hover:border-orange-500 hover:scale-[102%] duration-150"
              >
                <img
                  className="w-10 rounded-full"
                  src={value.pic1}
                  alt={value.title}
                />
                {value.title}{" "}
                <span className="text-gray-300/50 text-xs">{value.cat}</span>
              </Link>
            );
          })}
        </ul>
      )}
    </form>
  );
}

export default SearchBar;
