import React from 'react';
import Banner from './Banner';
import Gadgets from '../Gadgets/Gadgets';

const Home = () => {
    return (
        <div className='bg-white text-black'>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>
    );
};

export default Home;