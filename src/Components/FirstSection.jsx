import React from "react";
import SeachBar from "./SearchBar";
const FirstSection = () => {
  return (
    <div className="w-full h-85">
      <div className="flex flex-col items-start px-20">
        <h3 className="text-yellow-400 text-4xl md:text-5xl font-bold mb-2">
          Explore the unseen
        </h3>
        <h3 className="text-white text-2xl md:text-3xl font-light mb-4">
          Discover the new way
        </h3>
        <p className="text-white text-sm md:text-base max-w-xl mb-6">
          Let’s start your journey with us. Explore the most amazing places in
          the world.
        </p>
        <button className="bg-yellow-400 text-black font-medium py-2 px-6 rounded-full shadow-md hover:bg-yellow-500 transition">
          Explore Destinations
        </button>
      </div>
      
      <SeachBar />
    </div>
  );
};

export default FirstSection;
