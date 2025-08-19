
// import React from "react";

// const OurProcess = () => {
//   const steps = [
//     {
//       title: "1. Discovery",
//       description: "Understanding your goals and needs.",
//     },
//     {
//       title: "2. Planning",
//       description: "Creating a strategy tailored to your vision.",
//     },
//     {
//       title: "3. Design",
//       description: "Crafting visually stunning and user-friendly designs.",
//     },
//     {
//       title: "4. Development",
//       description: "Bringing the design to life with clean code.",
//     },
//     {
//       title: "5. Launch & Support",
//       description: "Testing, launching, and providing ongoing support.",
//     },
//     {
//       title: "6. HOW WE WORK",
//       description: "We follow a proven, flexible process built from decades of experience Every step is tailored to your vision, ensuring creative, strategic, and impactful results..",
//     },
//   ];

//   return (
//     <div className="bg-black min-h-screen text-white p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-bounce">
//             Our Process
//           </h1>
//           <div className="grid place-content-center">
//             <div className="h-1 w-25 border-b-4 border-red-800 rounded-2xl mb-3"></div>
//           </div>

//           <p className="text-lg md:text-xl text-gray-400">
//             Our process is a flexible framework that adapts, evolves, and
//             responds to your needs.
//             <br /> It is the streamlined result of two decades of website design
//             and marketing for hundreds of clients.
//           </p>
//         </div>

//         {/* Steps */}
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="bg-gray-900 p-6 rounded-xl hover:scale-105 hover:bg-gray-800 transition-all duration-300 shadow-lg"
//             >
//               <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
//               <p className="text-gray-400">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProcess;



import React from "react";

const OurProcess = () => {
  const steps = [
    {
      title: "1. Consultation",
      description: "We start by understanding your style preferences and needs.",
    },
    {
      title: "2. Styling Plan",
      description: "Our experts suggest the best haircut, color, or treatment for you.",
    },
    {
      title: "3. Grooming & Care",
      description: "From precision haircuts to beard styling and skincare, we’ve got you covered.",
    },
    {
      title: "4. Professional Service",
      description: "Enjoy a premium salon experience with top-quality products and techniques.",
    },
    {
      title: "5. Finishing Touch",
      description: "We refine every detail to make sure you leave looking and feeling your best.",
    },
    {
      title: "6. Aftercare & Support",
      description: "Get tips and guidance to maintain your style and shine between visits.",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-bounce">
            Our Process
          </h1>
          <div className="grid place-content-center">
            <div className="h-1 w-25 border-b-4 border-red-800 rounded-2xl mb-3"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-400">
            At ShineSpace Unisex Salon, we follow a step-by-step process to make sure 
            every visit leaves you confident, refreshed, and shining with style.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:scale-105 hover:bg-gray-800 transition-all duration-300 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
