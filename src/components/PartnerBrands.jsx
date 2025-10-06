import React from "react";

// Import brand logos
import loreal from "../assets/images/Skin_Beauty_Care.jpg";




import kerastase from"../assets/images/Spa_Relaxation.jpg"
import olaplex from"../assets/images/Mens_Grooming.jpg"
import moroccanoil from"../assets/images/Spa_Relaxation.jpg"
import gkhair from"../assets/images/Spa_Relaxation.jpg"
import dermalogica from"../assets/images/Spa_Relaxation.jpg"
import swati from"../assets/images/Spa_Relaxation.jpg"


const PartnerBrands = () => {
  const brands = [
    { name: "L'Oréal Professionnel", logo: loreal },
    { name: "Kérastase", logo: kerastase },
    { name: "Olaplex", logo: olaplex },
    { name: "Moroccanoil", logo: moroccanoil },
    { name: "GK Hair", logo: gkhair },
    { name: "Dermalogica", logo: dermalogica },
    { name: "Swati", logo: swati },

  ];

  return (
    <div className="container mx-auto text-center py-12">
      <h2 className="text-2xl font-semibold mb-8">Our Partner Brands</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
        {brands.map((brand, index) => (
          <div key={index} className="transition-transform hover:scale-105">
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerBrands;
