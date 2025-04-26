import React from "react";
import { FaCalendar } from "react-icons/fa";
import Argentina from "../assets/Argentina.jpg";
import Bali from "../assets/Bali.jpg";
import Paris from "../assets/Paris.jpg";

const TourPlaces = () => {
  const tours = [
    {
      image: Argentina,
      title: "Argentina",
      price: "USD $1000",
      duration: "4 Days Trip",
    },
    {
      image: Bali,
      title: "Bali",
      price: "USD $2000",
      duration: "5 Days Trip",
    },
    {
      image: Paris,
      title: "Paris",
      price: "USD $1500",
      duration: "3 Days Trip",
    },
  ];

  return (
    <section className="py-12  text-center">
      <h2 className="text-3xl font-bold">
        <span className="text-yellow-500">Top</span> Tour Places For You
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Lorem ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>

      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tours.map((tour, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-xl font-semibold">{tour.title}</h3>
              <p className="text-yellow-500 font-bold mt-2">{tour.price}</p>
              <p className="text-gray-500 mt-2">
                {" "}
                <FaCalendar className="text-yellow-500 mr-2" /> {tour.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourPlaces;
