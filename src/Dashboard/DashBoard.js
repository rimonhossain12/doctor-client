import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import DrawerSideBar from './DrawerSideBar';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    // console.log(user.auth);
    return (
        <>
        <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">

                    </div>
                    <div className="navbar-center">
                        <a href='/dashboard' className="capitalize text-xl text-accent text-thin font-mono">Welcome to <span className='text-primary'>{user?.displayName} </span> dashboard</a>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle block lg:hidden">
                            <label htmlFor="my-drawer" tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                        </button>
                    </div>
                </div>
            </div>
            <DrawerSideBar />
        </>

    );
};

export default DashBoard;