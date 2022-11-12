import React from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div class="sm:grid grid-cols-2 gap-4 place-content-stretch">
                <div>01</div>
                <div className="hidden sm:block">02</div>
            </div>
            <div>
                <h2 className='text-3xl font-semibold text-center text-indigo-600 my-5'>Welcome to your dashboard</h2>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>

            </div>

            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;