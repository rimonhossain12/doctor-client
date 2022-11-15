import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import LoadingSpinner from '../Pages/Shared/LoadingSpinner';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    console.log(user.email);

    const { isLoading, error, data: services } = useQuery('', () => fetch(`http://localhost:5000/user/${user.email}`)
        .then(res => res.json()
        )
    );

    console.log('loaded data  = ', services);
    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        return 'An error has occurred ' + error.message;
    }

    return (
        <div>
            <h2 className="text-2xl text-primary text-center py-5 font-mono">{user?.displayName} Sir Your Booking List. </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial No: </th>
                            <th>service Name</th>
                            <th>patientName</th>
                            <th>phone</th>
                            <td>email</td>
                            <td>slot</td>
                            <td>date</td>
                            <td>status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((service, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{service?.patientName}</td>
                                <td>{service?.serviceName}</td>
                                <td>{service?.phone}</td>
                                <td>{service?.email}</td>
                                <td>{service?.slot}</td>
                                <td>{service?.date}</td>
                                <td className='cursor-pointer badge badge-secondary badge-outline px-4 py-4 btn-group-horizontal'
                                    onClick={() => alert(`${service._id}`)}>cancel
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;