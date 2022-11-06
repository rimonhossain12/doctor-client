import React from 'react';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Banner from './Banner';
import Information from './Information';
import ShowTreatment from './ShowTreatment';
import TeethService from './TeethService';

const Home = () => {
    return (
        <>
            <div className='px-12'>
                <Banner />
                <Information />
                <ShowTreatment />
                <TeethService />
            </div>
            <div>
                <MakeAppointment />
            </div>
        </>
    );
};

export default Home;