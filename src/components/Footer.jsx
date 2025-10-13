// import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
// import logo from "../assets/images/ChatGPT Image Aug 19, 2025, 02_08_28 PM.png"; // <-- replace with your actual logo path

// const Footer = () => {
//   return (
//     <footer className="relative bg-gray-800 text-white pt-5 pb-3 ">
//       {/* Gradient top border */}
//       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-yellow-300 to-white"></div>

//       <div className="container mx-auto px-6 pt-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-6">
//           {/* Left Section */}
//           <div className="">
//             <img src={logo} alt="My Logo" className="h-50 " />
//             <p>“Your shine, our passion.”</p>
//           </div>

//           {/* Middle Section */}
//           <div className="text-center">
//             <h4 className="uppercase text-lg font-bold  mb-3 tracking-wide">
//               Address
//             </h4>

//             <div className="flex justify-center mb-3">
//               <iframe
//                 title="Google Map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119065.48768841915!2d81.70004756509843!3d21.160495748961704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c41db20a7489%3A0x4bfac41adac13b4a!2sAtal%20Nagar-Nava%20Raipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1760352711231!5m2!1sen!2sin"
//                 width="100%"
//                 height="200"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 className="rounded-md shadow-md"
//               ></iframe>
//             </div>

//             <p className="text-gray-300 leading-relaxed">
//               Building Number: 100, Street Name: T. Nagar,Street Address:33,
//               Ranganathan Street State: Tamil Nadu, City:Chennai, Post Code:
//               600017
//             </p>
//           </div>

//           <div>
//          <strong>Contact :</strong><span>12345678901</span>

//           </div>
//           <div> <li className="hover:text-white cursor-pointer">My services</li>
//             <li className="hover:text-white cursor-pointer">Gallery</li>
//             <li className="hover:text-white cursor-pointer">Contact</li>
//             <li className="hover:text-white cursor-pointer">Support</li></div>

//           {/* Right Section */}
//           <div>
//             <div className="flex mb-3">
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className="w-full px-3 py-2 text-white rounded-l-md me-2"
//               />
//               <button className="bg-gray-300 text-black font-semibold px-4 rounded-r-md hover:bg-white transition">
//                 Subscribe
//               </button>
//             </div>
//             <div className="flex space-x-4 text-gray-400 text-lg mt-2">
//               <a href="#" className="hover:text-white">
//                 <FaFacebookF />
//               </a>
//               <a href="#" className="hover:text-white">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="hover:text-white">
//                 <FaInstagram />
//               </a>
//               <a href="#" className="hover:text-white">
//                 <FaYoutube />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Copyright */}
//         <div className="border-t border-gray-600 text-center pt-3 text-sm text-gray-400">
//           Copyright © 2021
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/images/ChatGPT Image Aug 19, 2025, 02_08_28 PM.png"; // replace with your logo path

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white pt-10 pb-6">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={logo} alt="Logo" className="h-55" />
            <p className="text-gray-300 italic">“Your shine, our passion.”</p>
          </div>

          {/* Address Section */}
          <div className="text-center md:text-left">
            <h4 className="uppercase text-lg font-bold mb-3 tracking-wide">
              Address
            </h4>
            <div className="flex justify-center md:justify-start mb-3">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119065.48768841915!2d81.70004756509843!3d21.160495748961704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c41db20a7489%3A0x4bfac41adac13b4a!2sAtal%20Nagar-Nava%20Raipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1760352711231!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-md shadow-md"
              ></iframe>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building Number: 100, Street Name: T. Nagar, Street Address: 33,
              Ranganathan Street, State: Tamil Nadu, City: Chennai, Post Code:
              600017
            </p>
          </div>

          {/* Contact & Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="uppercase text-lg font-bold mb-3 tracking-wide">
              Contact
            </h4>
            <p className="text-gray-400 mb-3">
              Phone: <span className="text-white">12345678901</span>
            </p>

            <div className="flex justify-center md:justify-start space-x-4 text-lg text-white mt-2">
              <a
                href="https://www.facebook.com/"
                className="text-3xl bg-blue-500 rounded-2xl hover:bg-blue-500 hover:scale-110 transition transform duration-300 "
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/"
                className="text-3xl bg-pink-600 rounded-2xl hover:bg-pink-600 hover:scale-110 transition transform duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.twitter.com/"
                className="text-3xl bg-blue-400 rounded-2xl hover:bg-blue-300 hover:scale-110 transition transform duration-300 "
              >
                <FaTwitter />
              </a>
              <a
                href="https://wa.me/911234567890"
                className="text-3xl bg-green-600 rounded-2xl hover:bg-green-500 hover:scale-110 transition transform duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>

            <div className="flex mb-3 mt-10">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 rounded-l-md  text-black bg-white focus:outline-none"
              />
              <button className="bg-yellow-400 text-black font-semibold px-4 rounded-r-md hover:bg-yellow-500 transition cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          © 2025 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
