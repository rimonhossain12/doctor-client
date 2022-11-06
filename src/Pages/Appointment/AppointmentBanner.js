import React from 'react';
import chair from '../../../src/assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse md:gap-32 lg:gap-32">
                <img src={chair} className="lg:max-w-sm rounded-lg shadow-2xl" alt='not found' />
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                />
            </div>
        </div>

    );
};

export default AppointmentBanner;