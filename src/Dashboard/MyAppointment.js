import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import LoadingSpinner from '../Pages/Shared/LoadingSpinner';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    console.log(user.email);

    const { isLoading, error, data } = useQuery('', () => fetch(`http://localhost:5000/user/${user.email}`)
        .then(res => res.json()
        )
    );

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        return 'An error has occurred ' + error.message;
    }

    return (
        <div>
            <h2>This is user appointment showing page: {data.length}</h2>
        </div>
    );
};

export default MyAppointment;