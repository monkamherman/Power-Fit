// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="hero-bg h-screen flex items-center justify-center text-white">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Transformez votre corps</h1>
        <p className="text-xl md:text-2xl mb-8">
          Rejoignez la meilleure salle de sport de la ville avec des équipements haut de gamme et des coachs professionnels
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#programmes" 
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition duration-300"
          >
            Découvrir nos programmes
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-md font-medium transition duration-300"
          >
            Essai gratuit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;