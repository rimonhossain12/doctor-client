import React from 'react';
import { format } from 'date-fns';

const AvailableAppointment = ({ date }) => {
    let formattedDate = format(date, 'PP');
    return (
        <div className='mb-10'>
            <h2 className='text-xl text-primary'>Available Service on: {formattedDate}</h2>
            <h4 className='text-accent py-2 text-xl'>please select a service.</h4>
        </div>
    );
};

export default AvailableAppointment;