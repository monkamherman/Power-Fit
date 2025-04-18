// components/Testimonials.js
import React from 'react';

const testimonials = [
  {
    name: 'Julie D.',
    stars: 5,
    comment: '"J\'ai perdu 15kg en 6 mois grâce au programme minceur et aux conseils de Sophie. L\'ambiance est géniale et les équipements top !"',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Pierre L.',
    stars: 5,
    comment: '"Marc m\'a aidé à prendre 8kg de muscle en 1 an. Son expertise en musculation est impressionnante. Je recommande PowerFit à 100%."',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Élodie T.',
    stars: 4.5,
    comment: '"Les cours de yoga avec Laura m\'ont transformée. Moins de stress, plus de souplesse et un bien-être général. La salle est toujours propre et bien entretenue."',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
];



const Testimonials: React.FC = () => {
  const renderStars = (count: number) => {
    const stars = [];
    const fullStars = Math.floor(count);
    const hasHalfStar = count % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    return stars;
  };

  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Témoignages de nos membres</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Découvrez ce que disent nos membres satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-20 p-8 rounded-xl backdrop-filter backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src={testimonial.image} alt="Client" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <div className="flex text-yellow-400">
                    {renderStars(testimonial.stars)}
                  </div>
                </div>
              </div>
              <p className="italic">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;