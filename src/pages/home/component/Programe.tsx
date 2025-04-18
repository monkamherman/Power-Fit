// components/Programs.js
import React from 'react';

const programs = [
  {
    title: 'Perte de poids',
    description: 'Programme minceur complet',
    price: '€59',
    popular: true,
    sessions: '3 séances/semaine',
    coach: 'Coach dédié',
    features: [
      'Programme cardio et musculation',
      'Suivi nutritionnel',
      'Bilan corporel mensuel'
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Prise de masse',
    description: 'Développez votre musculature',
    price: '€69',
    sessions: '4 séances/semaine',
    coach: 'Coach dédié',
    features: [
      'Programme musculation intensif',
      'Plan alimentaire hypercalorique',
      'Suivi des progrès bi-mensuel'
    ],
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  {
    title: 'Maintien en forme',
    description: 'Équilibre et bien-être',
    price: '€49',
    sessions: '2 séances/semaine',
    coach: 'Cours collectifs',
    features: [
      'Accès à tous les cours collectifs',
      'Conseils nutritionnels',
      'Accès espace détente'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2120&q=80'
  }
];

const Programs:React.FC = () => {
  return (
    <section id="programmes" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Nos Programmes</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choisissez le programme qui correspond à vos objectifs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="program-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative">
                <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                {program.popular && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Populaire
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{program.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{program.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-red-600">{program.price}</span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">/mois</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-300">
                    <i className="fas fa-clock mr-1"></i> {program.sessions}
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-300">
                    <i className={`fas ${program.coach === 'Coach dédié' ? 'fa-user' : 'fa-users'} mr-1`}></i> {program.coach}
                  </span>
                </div>
                <ul className="mt-6 space-y-2 text-gray-600 dark:text-gray-300">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium transition duration-300">
                  Choisir ce programme
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;