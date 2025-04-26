import React from "react";
import { FaStar } from "react-icons/fa";
import Girl from "../assets/Girl.png";
const CustomerReview = () => {
  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">
          Here What <span className="text-yellow-500">Our Customers</span> Says?
        </h2>
      </div>

      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition">
            View more reviews
          </button>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={Girl}
              alt="Customer"
              className="w-100 h-30 object-cover rounded-xl shadow-lg"
            />
            <div className=" bg-white shadow-xl rounded-xl p-4 w-100">
              <p className="text-gray-600 text-sm mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
              <div className="flex justify-between items-center">
                <div className="font-bold text-gray-800">
                  Nasima Akter, Bangladesh
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-yellow-500 mr-2" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
