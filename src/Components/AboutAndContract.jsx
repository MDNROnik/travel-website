import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import apple from "../assets/appStore.png";
import google from "../assets/googlePlay.png";
import logo from "../assets/logo.png";

const AboutAndContract = () => {
  return (
    <footer className=" py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-700 px-6">
        <div className="col-span-2 md:col-span-1 flex items-start">
          <img src={logo} alt="Logo" className="w-20 h-auto" />
        </div>

        <div>
          <h4 className="font-bold mb-3">About</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Resources and Policies</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Explore</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Write a Review</a>
            </li>
            <li>
              <a href="#">Add a Place</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Get the App</h4>
          <div className="space-y-2">
            <a href="#">
              <img src={google} alt="Google Play" className="w-33" />
            </a>
            <a href="#">
              <img src={apple} alt="App Store" className="w-34" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-2">Follow us:</h4>
          <div className="flex items-center space-x-4 text-xl text-gray-600">
            <a href="#">
              <FaFacebookF className="hover:text-blue-600" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="#">
              <FaYoutube className="hover:text-red-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AboutAndContract;
