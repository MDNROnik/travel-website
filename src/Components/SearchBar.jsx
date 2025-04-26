import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center bg-black/30 pt-5 pb-5 ml-90 mr-90 rounded-xl">
      <div className="flex items-center justify-center">
        <div className="flex bg-white p-2 rounded-xl space-x-2">
          <select className=" px-4 py-2">
            <option>Category</option>
          </select>

          <input type="text" placeholder="Location" className=" px-4 py-2" />

          <select className="px-4 py-2 ">
            <option>Guests</option>
          </select>

          <button className="bg-yellow-400 text-black font-semibold rounded-full px-6 py-2 hover:bg-yellow-500 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
