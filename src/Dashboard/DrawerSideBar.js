import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DrawerSideBar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drower-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="dashboard-drower-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard/myAppointment">My Appointment</Link></li>
                        <li><Link to="/dashboard/review">Review</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DrawerSideBar;