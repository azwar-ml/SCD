import React from 'react';
// Import the Icons here
import { FaPencilAlt, FaMedkit, FaCogs } from "react-icons/fa";
// Import your new Card component
import Card from "./Card";

export default function Section3() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-4">Services</h3>

      <p className="text-gray-300 text-sm mb-10 leading-relaxed text-justify">
        Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life...
      </p>

      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Call 1: Content Writing */}
        <Card 
            icon={<FaPencilAlt />} 
            title="Content Writing" 
            description="Today is WEEK 4 of SCD class. We are learning Next JS framework for React JS."
            footer="Azwar" 
        />

        {/* Call 2: Medical Help */}
        <Card 
            icon={<FaMedkit />} 
            title="Medical Help" 
            description="Today is WEEK 4 of SCD class. We are learning Next JS framework for React JS."
            footer="SCD" 
        />

        {/* Call 3: Engineering */}
        <Card 
            icon={<FaCogs />} 
            title="Engineering" 
            description="Today is WEEK 4 of SCD class. We are learning Next JS framework for React JS."
            footer="Class" 
        />

      </div>
    </div>
  );
}