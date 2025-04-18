// components/Trainers.js
import React from 'react';

const trainers = [
  {
    name: 'Marc Dubois',
    role: 'Coach musculation',
    description: 'Spécialiste en prise de masse et force, Marc vous aidera à repousser vos limites.',
    badges: ['Certifié IFBB', '10 ans exp.'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5aaca10d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Sophie Martin',
    role: 'Coach fitness & nutrition',
    description: 'Experte en perte de poids et remise en forme, Sophie vous guidera vers une vie plus saine.',
    badges: ['Diététicienne', '8 ans exp.'],
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Thomas Leroy',
    role: 'Coach CrossFit & HIIT',
    description: 'Passionné par les entraînements intenses, Thomas vous poussera à donner le meilleur de vous-même.',
    badges: ['L2 CrossFit', '6 ans exp.'],
    image: 'https://images.unsplash.com/photo-1581009146145-de5d61e73450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Laura Petit',
    role: 'Coach Yoga & Pilates',
    description: 'Spécialiste en mobilité et bien-être, Laura vous aidera à trouver l\'harmonie entre corps et esprit.',
    badges: ['RYT 500', '12 ans exp.'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80'
  }
];

const Trainers: React.FC = () => {
  return (
    <section id="coachs" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Nos Coachs Professionnels</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Une équipe de passionnés pour vous accompagner vers vos objectifs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transition duration-300">
              <div className="overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-64 object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{trainer.name}</h3>
                <p className="text-red-600 font-medium mb-3">{trainer.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {trainer.description}
                </p>
                <div className="flex space-x-2">
                  {trainer.badges.map((badge, i) => (
                    <span key={i} className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-300">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;