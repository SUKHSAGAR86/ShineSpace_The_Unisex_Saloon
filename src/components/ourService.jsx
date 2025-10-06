
import React from 'react';
import Card from './card.jsx'; 
import SkinCare from "../assets/images/Skin_Beauty_Care.jpg"
import HairCut from "../assets/images/HairCut.jpg"
import Spa_Relaxation from"../assets/images/Spa_Relaxation.jpg"
 import Mens_Grooming from"../assets/images/Mens_Grooming.jpg"
const OurService = () => {
const ServiceCard = [
  {
    title: "Hair Styling",
    description:
      "Get the perfect look with our professional hair styling services. From trendy cuts to elegant styles, we make sure you shine every day.",
    offer: "Flat 40% Off",
    bgimg:HairCut,
  },
  {
    title: "Skin & Beauty Care",
    description:
      "Pamper yourself with our exclusive skin and beauty treatments. Experience facials, clean-ups, and therapies designed to rejuvenate your glow.",
    offer: "Up to 50% Off",
    bgimg:SkinCare
     ,
  },
  {
    title: "Men’s Grooming",
    description:
      "Look sharp and confident with our premium grooming services for men. Haircuts, beard styling, facials, and more to keep you at your best.",
    offer: "50% Off",
    bgimg:Mens_Grooming,
  },
  {
    title: "Spa & Relaxation",
    description:
      "Unwind with our soothing spa therapies and massage treatments. Relieve stress, refresh your body, and experience true relaxation.",
    offer: "30% Off",
    bgimg: Spa_Relaxation,
  },
];

  return (
    <div className="text-white bg-black pb-3">
      <div className="p-5 sm:grid place-content-center">
        <div className="grid place-content-center pt-5">
          <div className="grid place-content-center font-bold text-4xl md:text-5xl animate-bounce ">
        
            Our Services
          </div>
          <div className="grid place-content-center">
            <div className="h-1 w-25 border-b-4 border-red-800 rounded-2xl mb-3"></div>
          </div>
          <div className="mb-4">
            <p className="grid place-content-center font-normal">
              Experience luxury grooming and beauty care under one roof with ShineSpace
            </p>
            <p className="grid place-content-center">where your shine is our passion.</p>
          </div>
        </div>

        <div className="mt-10 sm:grid grid-cols-2 gap-15">
          {ServiceCard.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
              offer={service.offer}
              bgimg={service.bgimg}
            />
          ))}
        </div>
     
      </div>
       <button className="bg-red-600 p-3 mt-6 rounded-2xl text-white font-bold sm:ml-[1100px] cursor-pointer hover:bg-red-900 transition-all duration-300 ">
              More View
            </button>
    </div>
  );
};

export default OurService;
