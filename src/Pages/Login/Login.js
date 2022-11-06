import React from 'react';

const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl text-accent">Login</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">Alt label</span>
                        </label>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt">Alt label</span>
                        </label>
                        <button className='btn w-full btn-accent text-white'>Login</button>
                    </div>
                    <p>New to Doctor Portal! <small> Create New Account</small></p>
                </div>
            </div>
        </div>

        // <div>
        //     <div class="flex justify-center items-center h-screen">
        //         Centered using Tailwind Flex
        //     </div>
        // </div>
    );
};

export default Login;