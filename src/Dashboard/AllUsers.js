import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Pages/Shared/LoadingSpinner';

const AllUsers = () => {

    const { isLoading, error, data: users } = useQuery(('allUser'), () => fetch('http://localhost:5000/allUser')
        .then(res => res.json()
        )
    );

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        return 'An error has occurred' + error.message;
    }

    return (
        <div>
            <h2 className="text-2xl text-primary text-center py-5 font-mono">Our all the register clients: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{user?.displayName}</td>
                                <td>{user?.email}</td>
                                <td>Customer</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;