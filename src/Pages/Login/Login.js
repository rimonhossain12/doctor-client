import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);


	return (
		<div className='flex justify-center items-center h-screen  overflow-y-hidden'>
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-center font-semibold text-2xl text-accent">Login</h2>
					<div className="form-control w-full max-w-xs">

						<form onSubmit={handleSubmit(onSubmit)}>
							<label className="label">
								<span className="label-text">Email</span>
							</label>

							<input
								{...register("email",
									{
										required: {
											value: true,
											message: 'Email is required'
										},
										pattern: {
											value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
											message: 'Provide a valid Email'
										}
									}

								)}
								aria-invalid={errors.email ? "true" : "false"}
								type="text" placeholder="Type here"
								className="input input-bordered w-full max-w-xs"
							/>

							<label className="label">
								{errors.email?.type === 'required' && <p className='text-red-500 text-start font-thin'>{errors?.email.message}</p>}
								{errors.email?.type === 'pattern' && <p className='text-red-500 text-start font-thin'>{errors?.email.message}</p>}
							</label>
							<label className="label">
								<span className="label-text">Password</span>
							</label>

							<input
								{...register("password",
									{
										required: {
											value: true,
											message: 'Password is required'
										},
										minLength: {
											value: 6,
											message: 'Must be provide 6 character or longer'
										}
									}

								)}
								aria-invalid={errors.email ? "true" : "false"}
								type="text" placeholder="Type here"
								className="input input-bordered w-full max-w-xs"
							/>

							<label className="label">
								{errors.password?.type === 'required' && <p className='text-red-500 text-start font-thin'>{errors?.password.message}</p>}
								{errors.password?.type === 'minLength' && <p className='text-red-500 text-start font-thin'>{errors?.password.message}</p>}
							</label>

							<button className='btn w-full btn-accent text-white'>Login</button>
						</form>
					</div>

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