import React from "react";
import {
  FaMapMarkerAlt,
  FaPlaneDeparture,
  FaRegHandshake,
} from "react-icons/fa";

import Girl from "../assets/Girl.png";

const StepSection = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Start Your Next Trip In Just{" "}
            <span className="text-yellow-500">3 Steps</span>
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 p-3 rounded-full text-white text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold text-lg">Choose The Destination</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-400 p-3 rounded-full text-white text-xl">
                <FaRegHandshake />
              </div>
              <div>
                <h4 className="font-bold text-lg">Easy Payment Method</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-cyan-700 p-3 rounded-full text-white text-xl">
                <FaPlaneDeparture />
              </div>
              <div>
                <h4 className="font-bold text-lg">Final Destination</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative text-center">
          <img src={Girl} alt="Girl" className="w-72 mx-auto" />

          <div className="absolute top-5 right-5 bg-white shadow-lg rounded-lg px-4 py-2 font-semibold text-gray-800">
            <p className="text-xl">2k+</p>
            <p className="text-sm text-gray-500">Top Places</p>
          </div>

          <div className="absolute bottom-5 left-5 bg-yellow-400 text-white px-4 py-1 rounded-full flex items-center gap-2 shadow">
            <img src={Girl} alt="User" className="w-6 h-6 rounded-full" />
            <span className="text-sm font-semibold">400k+ Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepSection;
