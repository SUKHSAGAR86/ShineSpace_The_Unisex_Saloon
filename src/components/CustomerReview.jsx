
// import React, { useEffect, useCallback, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     text: "It's super easy access to the parking lot, breakfast in the hotel is amazing and the spa is awesome! As soon as you get off the elevator for the spa you're greeted with an amazing smell of spa/eucalyptus and it only gets better from there! The free sauna and bar area are nice touches and the cocktails are hand crafted and delicious.",
//     author: "KATIE",
//     source: "GOOGLE REVIEW, 5-STARS",
//   },
//   {
//     text: "Absolutely incredible experience. The spa staff are professional and friendly, and the ambiance is relaxing beyond belief.",
//     author: "JOHN",
//     source: "TRIPADVISOR, 5-STARS",
//   },
//   {
//     text: "A perfect escape from daily stress — highly recommend!",
//     author: "SARAH",
//     source: "YELP, 5-STARS",
//   },
//   {
//   text: "It's super easy access to the parking lot, breakfast in the hotel is amazing and the spa is awesome! As soon as you get off the elevator for the spa you're greeted with an amazing smell of spa/eucalyptus and it only gets better from there! The free sauna and bar area are nice touches and the cocktails are hand crafted and delicious.",
//   author: "KATIE",
//   source: "GOOGLE REVIEW, 5-STARS",
//   image: "https://example.com/katie.jpg", // image URL
//   stars: 5 // star rating
// }
// ];

// const CustomerReview = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = useCallback(() => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   }, []);

//   useEffect(() => {
//     const intervalId = setInterval(nextTestimonial, 4000);
//     return () => clearInterval(intervalId);
//   }, [nextTestimonial]);

//   return (
//     <div className="bg-amber-200 py-8 text-center relative overflow-hidden">
//       <div className="max-w-3xl mx-auto min-h-[180px] flex items-center justify-center text-center">
//         {/* AnimatePresence enables exit + enter animations */}
//         <AnimatePresence mode="wait ">
//           <motion.div
//             key={currentIndex}
//             initial={{ x: "100%", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: "-100%", opacity: 0 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//             className="absolute"
//           >
//              <p className="mt-3 text-sm text-teal-600 uppercase tracking-wider">
//               - {testimonials[currentIndex].author},{" "}
//               {testimonials[currentIndex].source}
//             </p>
//             <p className="text-lg md:text-xl text-gray-800 italic p-8">
//               {testimonials[currentIndex].text}
//             </p>
           
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Dots (Indicators) */}
//       <div className="flex justify-center space-x-2 mt-8">
//         {testimonials.map((_, idx) => (
//           <span
//             key={idx}
//             className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
//               idx === currentIndex ? "bg-teal-600" : "bg-gray-400"
//             }`}
//             onClick={() => setCurrentIndex(idx)}
//             aria-label={`Go to testimonial ${idx + 1}`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomerReview;



import React, { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
{ image: "https://randomuser.me/api/portraits/men/26.jpg",
     author: "Dr.Abrahim",
    stars: 5,
       text: "it only gets better from there! The free sauna and bar area are nice touches and the cocktails are hand crafted and delicious."
  },


  { 
    image: "https://randomuser.me/api/portraits/women/44.jpg",
     author: "KATIE",
    stars: 4,
      text: "It's super easy access to the parking lot, breakfast in the hotel is amazing and the spa is awesome! As soon as you get off the elevator for the spa you're greeted with an amazing smell of spa/eucalyptus"
  },
  {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    author: "JOHN",
     stars: 5,
      text: "Absolutely incredible experience. The spa staff are professional and friendly, and the ambiance is relaxing beyond belief."
  },
  {
    
    image: "https://randomuser.me/api/portraits/women/65.jpg", 
    author: "SONOYA SARAH",
       stars: 4,
    text: "A perfect escape from daily stress — highly recommend!",
  }
];

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, 4000);
    return () => clearInterval(intervalId);
  }, [nextTestimonial]);

  return (
    <div className="bg-amber-200 py-8 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto min-h-[200px] flex flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute flex flex-col items-center px-4"
          >
            {/* Reviewer Image */}
            {testimonials[currentIndex].image && (
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                className="w-20 h-20 rounded-full object-cover border-4 border-teal-600 mb-4"
              />
            )}

             {/* Author / Source */}
            <p className="text-sm text-teal-600 uppercase tracking-wider">
              {testimonials[currentIndex].author}
              {testimonials[currentIndex].source}
            </p>

            {/* Stars */}
            <div className="flex space-x-1 mb-4">
              {Array.from({ length: testimonials[currentIndex].stars }).map(
                (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.176 0l-3.39 2.46c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                )
              )}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg md:text-xl text-gray-800 italic p-4">
              {testimonials[currentIndex].text}
            </p>

           
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots (Indicators) */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              idx === currentIndex ? "bg-teal-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
