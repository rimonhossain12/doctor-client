import React from 'react';
import { useForm } from "react-hook-form";


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-secondary text-2xl font-semibold">SignUp</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>

                            <input
                                className='input input-bordered w-full max-w-xs'
                                {...register("name",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    }

                                )}
                                aria-invalid={errors.name ? "true" : "false"}
                            />

                            <label className="label">
                                {errors.name?.type === 'required' && <p className='text-red-500 text-thin text-start'>{errors.name.message}</p>}
                            </label>


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
                                aria-invalid={errors.password ? "true" : "false"}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <p className='text-start text-red-500 text-thin'>{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p className='text-start text-red-500 text-thin'>{errors.password.message}</p>}
                            </label>


                        </div>

                        <input type="submit" className='w-full max-w-xs btn bg-accent text-white' />
                    </form>



                </div>
            </div>

        </div>
    );
};

export default SignUp;