import React from 'react';

export default function Section4() {
  return (
    <div className="px-10 pb-20 max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-6">Offers </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src="/img1.jfif" className="w-full h-64 object-cover rounded-lg border border-gray-600" />
          <img src="/img2.jfif" className="w-full h-64 object-cover rounded-lg border border-gray-600" />
          <img src="/img3.jfif" className="w-full h-64 object-cover rounded-lg border border-gray-600" />
          <img src="/img4.jfif" className="w-full h-64 object-cover rounded-lg border border-gray-600" />
      </div>
    </div>
  );
}