import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import SampleService from './SampleService';
import MakeAppoint from './MakeAppoint';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    let formattedDate = format(date, 'PP');
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, []);

    console.log('Specific data found = ', treatment);

    return (
        <div className='mb-10'>
            <h2 className='text-xl text-primary'>Available Service on: {formattedDate}</h2>
            <h4 className='text-accent py-2 text-xl'>please select a service.</h4>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    services.map(service => <SampleService
                        key={service._id}
                        service={service}
                    />)
                }
            </div>

            <div className='text-center my-12'>
                <h2 className='text-secondary text-2xl font-lighter py-12 sm:hidden lg:block md:block '>Available slots for Teeth Orthodontics</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                    {
                        services.map(service => <MakeAppoint
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        />)
                    }
                </div>
            </div>

        </div>
    );
};

export default AvailableAppointment;