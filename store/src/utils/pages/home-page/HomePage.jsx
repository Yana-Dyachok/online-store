import React from 'react';
import Hero from '../../components/hero/Hero';
import BikeBuilder from '../../components/bike-builder/BikeBuilder';
import BikeSlider from '../../components/bike-slider/BikeSlider';
import WhyUs from '../../components/why-us/WhyUs';
import Reviews from '../../components/reviews/Reviews';
const HomePage = () => {
    return (
        <>
            <Hero />
            <BikeBuilder />
            <BikeSlider />
            <WhyUs />
            <Reviews />
        </>
    );
};

export default HomePage;
