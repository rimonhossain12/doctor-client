import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth';

const Navbar = () => {
	const [user] = useAuthState(auth);
	const logout = () => {
		signOut(auth);
	};

	const menuBar = <>
		<li tabIndex={0}> <Link to="/">Home</Link> </li>
		<li tabIndex={1}> <Link to="/about">About</Link> </li>
		<li tabIndex={2}> <Link to="/appointment">Appointment</Link> </li>
		<li tabIndex={3}> <Link to="/review">Review</Link> </li>
		<li tabIndex={4}> <Link to="/contact">Contact us</Link> </li>
		<li tabIndex={5}><Link to="/dashboard">Dashboard</Link> </li>
		{
			user?.email ? <button
				onClick={logout}
				className="btn btn-active btn-ghost"
			>LogOut</button> : <li tabIndex={6}> <Link to="/login">Login</Link> </li>
		}

	</>
	return (
		<div className='sticky top-0 z-50'>
			<div className="navbar bg-base-100 px-12">
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