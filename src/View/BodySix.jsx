import React from "react";
import FindPlaces from "../Components/FindPlaces";
import Colab from "../assets/Colab.png";

const BodySix = () => {
  return (
    <div
      className="w-full h-110 bg-cover bg-center"
      style={{ backgroundImage: `url(${Colab})` }}
    >
      <FindPlaces />
    </div>
  );
};

export default BodySix;
