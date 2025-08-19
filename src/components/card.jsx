import React from "react";
import { TbMathGreater } from "react-icons/tb";

const Card = ({ title, description, bgimg, offer }) => {
  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden  mt-4 rounded-lg rounded-bl-4xl rounded-tr-4xl shadow-[5px_10px_5px_rgba(255,0,0,0.4)]">
      <div className="relative ">
        <img
          src={bgimg}
          alt=""
          className="w-full transition-transform brightness-40 "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-7 bg-white/10 backdrop-blur-none ">
          <div className="text-2xl font-bold text-white">{title}</div>

          <div className="grid place-content-center">
            <div className="h-1 w-20 border-b-4 border-red-800 rounded-2xl mb-3"></div>
          </div>
          <p className="text-white mb-4 font-semibold">{description}</p>
          <p className="bg-black font-mono text-white py-2 px-4 rounded-full mb-4 ">
            {offer}
          </p>
          <a
            href="#"
            className="text-white py-2 px-4 rounded-full flex font-semibold "
          >
            Learn More
            <div className="pt-2 ml-1.5 font-semibold ">
              <TbMathGreater />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
