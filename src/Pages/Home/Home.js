import React from 'react';
import Banner from './Banner';
import Information from './Information';
import ShowTreatment from './ShowTreatment';
import TeethService from './TeethService';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Information />
            <ShowTreatment />
            <TeethService />
        </div>
    );
};

export default Home;