import React, { useState } from 'react';
import { format } from 'date-fns';
import SampleService from './SampleService';
import MakeAppoint from './MakeAppoint';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query'
import LoadingSpinner from '../Shared/LoadingSpinner';



const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    let formattedDate = format(date, 'PP');

    // react query 
    const { isLoading, error, data: services, refetch } = useQuery((['available', formattedDate]), () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        return 'An error has occurred: ' + error.message;
    }

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
            {treatment && <BookingModal
                setTreatment={setTreatment}
                treatment={treatment}
                date={date}
                refetch={refetch}
            />}

        </div>
    );
};

export default AvailableAppointment;