import React, { Component } from 'react';
import Hero from './Hero';
import BikeBuilder from './BikeBuilder';

export class Main extends Component {
    render() {
        return (
        <main>
            <Hero />;
            <BikeBuilder />;
        </main>
        )
    }
}

export default Main;
