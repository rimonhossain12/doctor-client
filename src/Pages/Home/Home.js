import React from 'react';
import Banner from './Banner';
import Information from './Information';
import ShowTreatment from './ShowTreatment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Information />
            <ShowTreatment />
        </div>
    );
};

export default Home;