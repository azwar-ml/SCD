import React from 'react';

//  4 props: icon, title, description, and footer
export default function Card({ icon, title, description, footer }) {
  return (
    <div className="bg-white text-black p-8 rounded-lg text-center flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
      
      {/*Icon */}
      <div className="mb-4 text-3xl">
        {icon}
      </div>

      {/*Title */}
      <h4 className="font-bold mb-2">{title}</h4>

      {/*Description */}
      <p className="text-xs mb-4">
        {description}
      </p>

      {/* Footer */}
      <span className="font-bold text-sm">{footer}</span>
      
    </div>
  );
}