import SEO from '@/components/custom/utils/SEO'
import React from 'react'
import Hero from './component/Hero'
import Features from './component/Feature'
import Programs from './component/Programe'
import Trainers from './component/Trainer'
import Testimonials from './component/Testimonial'

const Home: React.FC = () => {
    return (
        <>
            {/* Seo compoments */}
            <SEO
                title='Welcome Power Fit - Your Trusted Apple Partner'
                description='Explore the latest iPhones and accessories at unbeatable prices. Enjoy a seamless shopping experience on our modern e-commerce platform.'
            />

            {/* App Comoments */}
            <>
                <Hero />
                <Features />
                <Programs />
                <Trainers />
                <Testimonials/>
            </>
        </>
    )
}

export default Home
