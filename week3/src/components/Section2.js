import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Section2() {
  return (
    <div className="flex flex-col items-center text-center mt-10 px-4">
      {/* Name and Title */}
      <h1 className="text-5xl font-bold text-blue-200">John Wick</h1>
      <h2 className="text-2xl font-semibold mt-2 text-white">Actor and Artist</h2>
      
      {/* Description */}
      <p className="max-w-lg mt-5 text-gray-300">
        John Wick is a 2014 American neo-noir action thriller film directed by Chad
        Stahelski (in his directorial debut) from a screenplay by Derek Kolstad.
      </p>

      {/* Social Icons */}
      <div className="flex gap-8 mt-8">
        <div className="bg-white text-black p-2 rounded cursor-pointer hover:bg-gray-200">
            <FaFacebookF />
        </div>
        <div className="bg-white text-black p-2 rounded cursor-pointer hover:bg-gray-200">
            <FaYoutube />
        </div>
        <div className="bg-white text-black p-2 rounded cursor-pointer hover:bg-gray-200">
            <FaLinkedinIn />
        </div>
      </div>

      {/* Profile Image - Remember to put download.jfif in public folder */}
      <div className="mt-10 mb-10">
         <img 
           src="/download.jfif" 
           alt="Profile" 
           className="w-48 h-48 rounded-full border-4" 
         />
      </div>
    </div>
  );
}