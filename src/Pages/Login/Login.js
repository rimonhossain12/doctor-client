import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';



const Login = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();
	const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);

	let signInError;
	let navigate = useNavigate();

	const onSubmit = (data) => {
		signInWithEmailAndPassword(data.email, data.password);
		console.log(data);
	};

	useEffect(() => {
		if (user || gUser) {
			navigate('/appointment')
		}
	}, [user, gUser, navigate])


	if (error || gError) {
		signInError = <p className='text-red-500 text-thin'>{error.message}</p>
	}

	if (loading || gLoading) {
		return <LoadingSpinner />
	}

	return (
		<div className='flex justify-center items-center h-screen'>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-center text-secondary text-2xl font-semibold">Login</h2>

					<form onSubmit={handleSubmit(onSubmit)}>

						<div className="form-control w-full max-w-xs">
							<label className="label">
								<span className="label-text">Your Email</span>
							</label>

							<input
								className='input input-bordered w-full max-w-xs'
								{...register("email",
									{
										required: {
											value: true,
											message: 'Email is Required'
										},
										pattern: {
											value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
											message: 'Provide a valid Email'
										}
									}
								)}
								type='email'
								aria-invalid={errors.email ? "true" : "false"}
							/>

							<label className="label">
								{errors.email?.type === 'required' && <p className='text-start text-red-500 text-thin'>{errors.email.message}</p>}
								{errors.email?.type === 'pattern' && <p className='text-start text-red-500 text-thin'>{errors.email.message}</p>}
							</label>

							<label className="label">
								<span className="label-text">Password</span>
							</label>

							<input
								className='input input-bordered w-full max-w-xs'
								{...register("password",
									{
										required: {
											value: true,
											message: 'password is Required'
										},
										minLength: {
											value: 6,
											message: 'Character must be 6 or longer'
										}
									}
								)}
								type='password'
								aria-invalid={errors.password ? "true" : "false"}
							/>

							<label className="label">
								{errors.password?.type === 'required' && <p className='text-start text-red-500 text-thin'>{errors.password.message}</p>}
								{errors.password?.type === 'minLength' && <p className='text-start text-red-500 text-thin'>{errors.password.message}</p>}
							</label>
						</div>
						{/* <div className='my-3'> */}
						{signInError}
						{/* </div> */}
						<input type="submit" className='w-full max-w-xs btn bg-accent text-white' value='Login' />
					</form>

					<p className='text-accent text-thin'>New to Doctor portal?
						<Link to="/signup">
							<small className='text-secondary'> Create an account</small>
						</Link>
					</p>

					<div className="divider">
						OR
					</div>

					<button
						className='btn btn-outline uppercase'
						onClick={() => signInWithGoogle()}
					>Continue with google</button>


				</div>
			</div>

		</div>
	);
};

export default Login;