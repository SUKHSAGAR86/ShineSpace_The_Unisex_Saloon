import React from "react";
import spaImage from"../assets/images/Spa_Relaxation.jpg" // replace with your actual image

const SpaSection = () => {
  return (
    <section className="bg-[#000000] py-16 px-6 md:px-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold  text-teal-700 leading-tight mb-6">
            Inhale, Exhale, <br /> Prevail
          </h2>
          <p className="text-white text-lg mb-8 leading-relaxed">
            Designed with just the right combination of relaxation and luxury,
            escapes at The Refuge Spa invite you into a restorative trance as
            you let go of stress and rise above it all.
          </p>
          <button className="bg-teal-700 text-white px-6 py-3 rounded-md shadow-md hover:bg-teal-800 transition duration-300 flex items-center gap-2">
            Explore Escapes
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div className="relative group">
          <img
            src={spaImage}
            alt="Spa Massage"
            className="rounded-lg shadow-xl transform group-hover:scale-105 transition duration-500"
          />
          {/* Decorative overlay */}
         
        </div>
      </div>
    </section>
  );
};

export default SpaSection;



