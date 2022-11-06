import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
import { format } from 'date-fns';

const Appointment = () => {
    let [date, setDate] = useState(new Date());
    let selectedDate = date;
    let footer = <p>Please a correct date!</p>
    if (selectedDate) {
        date = selectedDate;
    }

    return (
        <div className='px-12'>
            <AppointmentBanner
                date={footer}
                setDate={setDate}
            />
            <AvailableAppointment date={date} />
        </div>
    );
};

export default Appointment;