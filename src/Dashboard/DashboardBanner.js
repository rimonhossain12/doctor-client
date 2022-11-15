import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import DashBoard from './DashBoard';

const DashboardBanner = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                </div>
                <div className="navbar-center">
                    <h2 className="capitalize text-xl text-accent text-thin font-mono">Welcome
                        <span className='text-primary'> {user?.displayName} </span> to your dashboard</h2>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle block lg:hidden">
                        <label htmlFor="dashboard-drower-sidebar" tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </button>
                </div>
            </div>

            <DashBoard />
        </div>
    );
};

export default DashboardBanner;