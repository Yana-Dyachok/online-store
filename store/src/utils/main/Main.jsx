import React, { Component } from 'react';
import Hero from './Hero';
import BikeBuilder from './BikeBuilder';
import BikeSlider from './BikeSlider';
import WhyUs from './WhyUs';
import Reviews from './Reviews';

export class Main extends Component {
    render() {
        return (
            <main>
                <Hero />;
                <BikeBuilder />;
                <BikeSlider />;
                <WhyUs />;
                <Reviews />;
            </main>
        );
    }
}

export default Main;
