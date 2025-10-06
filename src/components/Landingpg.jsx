import React from "react";
import OurProcess from "./ourProcess";
import OurService from "./ourService";
import CustomerReview from "./CustomerReview";
import SpaSection from "./SpaSection";
import AboutUs from "./AboutUs";

import { CiApple, CiPlay1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import mobileImage from "../assets/images/ChatGPT Image Aug 19, 2025, 02_08_28 PM.png";


const LandingPg = () => {
  return (
    <div className="bg-black h-auto">
      <div className="sm:grid grid-cols-2 gap-20 p-8">
        {/* Left Section */}
        <div className="sm:ml-9 grid place-content-center">
          <div className="text-white">
            <p className="text-4xl sm:text-6xl font-bold">
              Transform Your life with
            </p>
            <p className="text-5xl font-bold text-red-500 mt-2">
             ShineSpace
            </p><p>“Your shine, our passion.”</p>
            <p className="text-gray-500 font-semibold mt-4">
              Download our app and unlock a world of wellness, beauty, and
              exclusive member benefits.
            </p>

            {/* Rating */}
            <div className="mt-9 flex items-center">
              <span className="text-amber-300 flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className="ml-2 text-white">4.0/5 (1k+ Reviews)</span>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap mt-7">
              {/* App Store Button */}
              <button className="border bg-neutral-800 mr-3 rounded-2xl hover:bg-blue-700 p-3 flex items-center shadow-[5px_0_10px_rgba(255,0,0,0.5)] cursor-pointer transition-all duration-300">
                <span className="grid place-content-center text-2xl">
                  <CiApple />
                </span>
                <span className="ml-2">
                  <p className="text-xs">Get it on</p>
                  <p className="font-bold text-sm">App Store</p>
                </span>
              </button>

              {/* Play Store Button */}
              <button className="border bg-neutral-800 ml-1 rounded-2xl hover:bg-blue-700 p-3 flex items-center shadow-[5px_0_10px_rgba(255,0,0,0.5)] cursor-pointer transition-all duration-300">
                <span className="grid place-content-center text-2xl">
                  <CiPlay1 />
                </span>
                <span className="ml-2">
                  <p className="text-xs">Get it on</p>
                  <p className="font-bold text-sm">Play Store</p>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid place-content-center m-6">
          <div className="flex flex-col items-center">
            <img
              src={mobileImage}
              alt="Mobile App"
              className="w-full max-w-xs sm:max-w-sm"
            />
            <button className="bg-red-600 p-3 mt-6 rounded-2xl text-white font-bold sm:ml-[70px] cursor-pointer hover:bg-red-900 transition-all duration-300">
              Buy Membership
            </button>
          </div>
        </div>
      </div>
      <div><AboutUs/></div>
   
      <div><OurService /></div>
      <div><OurProcess/></div>
         <div><SpaSection/></div>
      
   
      <div><CustomerReview/></div>
   
    </div>
  );
};

export default LandingPg;
