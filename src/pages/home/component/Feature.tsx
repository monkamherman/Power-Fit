// components/Features.js
import React from 'react';

const features = [
  {
    icon: 'fa-dumbbell',
    title: 'Équipements Premium',
    description: 'Machines Technogym dernier cri, poids libres, kettlebells et tout le nécessaire pour un entraînement complet.'
  },
  {
    icon: 'fa-user-tie',
    title: 'Coaching Personnalisé',
    description: 'Nos coachs certifiés vous accompagnent pour créer un programme sur mesure adapté à vos objectifs.'
  },
  {
    icon: 'fa-utensils',
    title: 'Nutrition',
    description: 'Conseils nutritionnels, plans alimentaires et compléments de qualité pour optimiser vos résultats.'
  },
  {
    icon: 'fa-users',
    title: 'Cours Collectifs',
    description: 'CrossFit, HIIT, Yoga, Pilates, Zumba et bien plus encore avec nos instructeurs passionnés.'
  },
  {
    icon: 'fa-spa',
    title: 'Espace Détente',
    description: 'Sauna, hammam et massages pour une récupération optimale après l\'effort.'
  },
  {
    icon: 'fa-child',
    title: 'Espace Kids',
    description: 'Garderie professionnelle pour que vous puissiez vous entraîner l\'esprit tranquille.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Nos Services Complets</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tout ce dont vous avez besoin pour atteindre vos objectifs fitness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl">
              <div className="text-red-600 mb-4">
                <i className={`fas ${feature.icon} text-4xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;