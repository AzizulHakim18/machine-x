import React from 'react';
import Services from '../../Services/Services/Services';
import Products from '../Products/Products';
import Progress from '../Progress';
import Carosel from '../Carosel/Carosel';
import Features from '../Features';


const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Services></Services>
            <Progress></Progress>
            <Products></Products>
            <Features></Features>
        </div>
    );
};

export default Home;