

import React from "react";

const IMAGE_URL_1 =
  "https://orane.com/wp-content/uploads/2024/07/body-care-spa-body.webp";
const IMAGE_URL_2 =
  "https://salonbizsoftware.com/wp-content/uploads/2024/02/Stylists-doing-hair-at-salon-stations.jpg";

const StyledImage = ({ src, alt, className, rotation }) => (
  <div className={`w-full h-64 md:h-80 ${className}`}>
    <div
      className={`relative h-full overflow-hidden rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] shadow-2xl ${rotation} transition-transform duration-700 ease-in-out hover:rotate-0`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform hover:scale-110 transition duration-500 ease-in-out"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x320/333333/ffffff?text=Image+Load+Error";
        }}
      />
      <div className="absolute inset-0 bg-black opacity-20"></div>
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-8 font-inter">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center pe-5 ps-5">
        {/* Left: Images */}
        <div className="w-full md:w-5/12 relative flex flex-col sm:flex-row md:flex-col gap-4 justify-center">
          <StyledImage
            src={IMAGE_URL_1}
            alt="A person receiving a relaxing back massage."
            className="sm:w-1/2 md:w-full relative z-10 md:translate-y-4"
            rotation="rotate-3"
          />
          <StyledImage
            src={IMAGE_URL_2}
            alt="A full body massage being administered in a beautifully lit spa room."
            className="sm:w-1/2 md:w-full relative z-20 sm:ml-4 md:mt-0 md:-ml-8 md:-translate-y-24 md:-rotate-3"
            rotation="-rotate-3"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-7/12 space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-red-500 leading-tight tracking-tight">
              ShineSpace In Raipur
            </h2>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
              Best Unisex Salon & Spa — Your Sanctuary Of Wellness & Luxury
            </h3>
          </div>

          <div className="space-y-4 text-lg text-gray-400">
            <p className="font-semibold text-red-300">
              Invest in Your Well-Being
            </p>
            <p>
              Escape the everyday rush and surrender to tranquility at the best
              unisex salon & spa in Raipur. From soothing body massage in Raipur
              therapies to opulent royal spa rituals, our luxurious unisex salon
              & spa in Raipur is designed to <strong>revive your body</strong>,{" "}
              <strong>elevate your look</strong>, <strong>soothe your mind</strong>,
              and <strong>lift your spirit</strong>.
            </p>
          </div>

          <button
            onClick={() => console.log("Learn More Clicked")}
            className="mt-8 px-12 py-3 text-lg font-bold text-white bg-red-600 rounded-full shadow-xl shadow-red-600/30 hover:bg-red-500 transition duration-300 ease-in-out transform hover:scale-[1.05] active:scale-[0.98] border-2 border-red-500"
            aria-label="Learn More about our services"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
