import React from "react";
import SeachBar from "./SearchBar";
const FindPlaces = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-yellow-500 mb-4">ہنزہ</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Super Deluxe
          </h2>
          <p className="text-white mb-6">6 Days 5 Nights Tour</p>
        </div>
      </div>

      <SeachBar />
    </section>
  );
};

export default FindPlaces;
