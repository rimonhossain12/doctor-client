import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';



const Login = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();

	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);

	const onSubmit = (data) => {
		// e.preventDefault();
		signInWithEmailAndPassword(data.email, data.password);
		console.log(data);
	};


	let signInError;
	let navigate = useNavigate();

	if (error) {
		signInError = <p className='text-red-500 text-thin'>{error.message}</p>
	}

	if (loading) {
		return <LoadingSpinner />
	}

	if (user) {
		navigate('/home')
	}



	return (
		<div className='flex justify-center items-center h-screen  overflow-y-hidden'>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-center font-semibold text-2xl text-accent">Login</h2>

					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input type="email"
								placeholder="Your Email"
								className="input input-bordered w-full max-w-xs"
								{...register("email",
									{
										required: {
											value: true,
											message: 'Email is required!'
										},
										pattern: {
											value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
											message: 'Provide a valid Email'
										}
									}
								)}
								aria-invalid={errors.email ? "true" : "false"}
							/>
							<label className="label">
								{errors.email?.type === 'required' && <p className='text-red-500 text-thin' role="alert">{errors.email.message}</p>}
								{errors.email?.type === 'pattern' && <p className='text-red-500 text-thin' role="alert">{errors.email.message}</p>}
							</label>
						</div>


						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input type="password"
								placeholder="Type here"
								className="input input-bordered w-full max-w-xs"
								{...register("password",
									{
										minLength: {
											value: 6,
											message: 'Must be 6 character or Longer!'
										}
									}
								)}
								aria-invalid={errors.password ? "true" : "false"}
							/>
							<label className="label">
								{errors.password?.type === 'required' && <p className='text-red-500 text-thin' role="alert">{errors.password.message}</p>}
								{errors.password?.type === 'minLength' && <p className='text-red-500 text-thin' role="alert">{errors.password.message}</p>}
							</label>
						</div>
						{signInError}
						<input type="Submit" className='btn btn-outline w-full max-w-xs' value='Login' />
					</form>

					<p className='py-2'>New to Doctor Portal?
						<Link to="/signup"><span className='text-secondary'> Create New Account</span></Link>
					</p>

					<div className="divider">OR</div>
					<button className='btn btn-outline uppercase'>continue with google</button>
				</div>
			</div>
		</div>
	);
};

export default Login;