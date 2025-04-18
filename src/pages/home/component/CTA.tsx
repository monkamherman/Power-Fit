// components/CTA.js
import React from 'react';

const CTA:React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Prêt à transformer votre corps ?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Profitez de notre offre spéciale : 1 mois d'essai gratuit sans engagement
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold text-lg transition duration-300"
          >
            <i className="fas fa-calendar-check mr-2"></i> Réserver un essai
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-md font-bold text-lg transition duration-300"
          >
            <i className="fas fa-phone-alt mr-2"></i> Nous appeler
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;