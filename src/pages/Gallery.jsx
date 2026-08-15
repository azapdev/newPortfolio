import React from 'react';

export default function Gallery() {
  const images = [1, 2, 3, 4, 5, 6]; // Placeholders

  return (
    <div className="pt-24 pb-20 px-4 min-h-screen bg-bgAlt">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-heading font-bold text-textPrimary mb-4">Visual Log</h1>
          <p className="text-textSecondary">App UI snapshots & Dental clinic moments.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map(img => (
            <div key={img} className="bg-gray-200 rounded-2xl border border-borderLight overflow-hidden hover:shadow-lg transition-shadow flex items-center justify-center text-gray-400">
              [Gallery Image {img}]
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
