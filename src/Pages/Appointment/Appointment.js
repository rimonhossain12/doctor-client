import React, { useState } from 'react';
import FooterBg from '../Shared/FooterBg';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    let footer = <p>Please a correct date!</p>
    return (
        <>
            <div className='px-12'>
                <AppointmentBanner
                    date={footer}
                    setDate={setDate}
                />
                <AvailableAppointment
                    date={date}
                />
            </div>
            <div>
                <FooterBg />
            </div>
        </>
    );
};

export default Appointment;