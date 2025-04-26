import React from "react";
import { FaStar } from "react-icons/fa";
import Girl from "../assets/Girl.png";
const Why = () => {
  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Why <span className="text-yellow-500">Solara</span> Tours?
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={Girl}
            alt="Happy Client"
            className="w-80 h-auto rounded-xl object-cover"
          />
        </div>

        <div className="col-span-2 flex flex-col justify-center">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-50 rounded-xl p-6 w-48 text-center shadow-md">
              <h3 className="text-2xl font-bold text-gray-800">480k+</h3>
              <p className="text-gray-500 mt-2">Happy Clients</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 w-48 text-center shadow-md">
              <h3 className="text-2xl font-bold text-gray-800">2k+</h3>
              <p className="text-gray-500 mt-2">Top Places</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 w-48 text-center shadow-md">
              <h3 className="text-2xl font-bold text-yellow-500 flex items-center justify-center gap-2">
                <FaStar className="text-yellow-500 mr-2" /> 4.7
              </h3>
              <p className="text-gray-500 mt-2">3500+ Reviews</p>
            </div>
          </div>

          <p className="mt-8 text-gray-600 max-w-2xl mx-auto text-center">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;
