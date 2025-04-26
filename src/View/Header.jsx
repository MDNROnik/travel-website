import React from "react";
import frontBackGround from "../assets/front-back-ground.jpg";
import FirstSection from "../Components/FirstSection";
import Navbar from "../Components/Navbar";
const Header = () => {
  return (
    <div
      className="w-full h-110 bg-cover bg-center"
      style={{ backgroundImage: `url(${frontBackGround})` }}
    >
      <Navbar />
      <FirstSection />
    </div>
  );
};

export default Header;
