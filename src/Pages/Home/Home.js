import React from 'react';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
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
            <div className="px-12">
                <Testimonial />
            </div>
        </>
    );
};

export default Home;