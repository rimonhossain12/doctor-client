import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const menuBar = <>
		<li tabIndex={0}> <Link to="/">Home</Link> </li>
		<li tabIndex={1}> <Link to="/appointment">appointment</Link> </li>
		<li tabIndex={1}> <Link to="/review">Review</Link> </li>
		<li tabIndex={2}> <Link to="/contact">Contact us</Link> </li>
		<li tabIndex={3}> <Link to="/login">Login</Link> </li>
	</>
	return (
		<div className='px-12 sticky top-0 z-50'>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
						</label>
						<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							{menuBar}
						</ul>
					</div>
					<a className="btn btn-ghost normal-case text-xl" href='/'>Doctor Portal</a>
				</div>
				<div className="navbar-end hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						{menuBar}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;