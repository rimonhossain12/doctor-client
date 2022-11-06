import React from 'react';
import chair from '../../../src/assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse md:gap-32 lg:gap-32">
                <img src={chair} alt='not found' className="max-w-sm w-full rounded-lg shadow-2xl" />
                <div className='text-start w-auto'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>

    );
};

export default AppointmentBanner;