import React from 'react';
import { format } from 'date-fns';

const AvailableAppointment = ({ date }) => {
    let formattedDate = format(date, 'PP');
    return (
        <div className='mb-10'>
            <h2>You have selected date : {formattedDate}</h2>
        </div>
    );
};

export default AvailableAppointment;