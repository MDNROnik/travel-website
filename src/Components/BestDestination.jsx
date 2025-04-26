import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Argentina from "../assets/Argentina.jpg";
import Bali from "../assets/Bali.jpg";
import Paris from "../assets/Paris.jpg";

const destinations = [
  {
    title: "Argentina",
    price: "USD 500.0",
    image: Argentina,
  },
  {
    title: "Bali",
    price: "USD 350.0",
    image: Bali,
  },
  {
    title: "Paris",
    price: "USD 450.0",
    image: Paris,
  },
];

const Destinations = () => {
  return (
    <div className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">
        <span className="text-yellow-500">Best</span> Destinations
      </h2>
      <p className=" max-w-2xl mx-auto mb-10">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>

      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={place.image}
              alt={place.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold mb-1">{place.title}</h3>
              <p className="text-gray-600 mb-2">{place.price}</p>
              <div className="flex items-center text-sm text-gray-500">
                <FaCheckCircle className="text-yellow-500 mr-2" />5 Days Trip
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
