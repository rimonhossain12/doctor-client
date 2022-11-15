import React from 'react';

const UserService = ({ service, index }) => {
    console.log('single service = ', service)
    const { serviceName, patientName, phone, email, slot, date } = service;
    return (
        <div>
            <h2>This is single service</h2>
            {/* <tr>
                <th>{index + 1}</th>
                <td>{patientName}</td>
                <td>{serviceName}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{slot}</td>
                <td>{date}</td>
            </tr> */}
        </div>
    );
};
export default UserService;