import React from 'react';
import appointment from '../../../src/assets/images/appointment.png';

const Contact = () => {
    return (
        <section className="flex justify-center items-center my-5 py-12"
            style={{
                background: `url(${appointment})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
            }}
        >
            <div>
                <div className="form-div">
                    {/* <form> */}
                    <h2 className='text-primary capitalize font-semibold text-2xl py-2'>Contact Us</h2>
                    <h3 className='text-white text-2xl mb-3 w-full'>Stay connected with us</h3>
                    <input type="email" placeholder="Enter Your Email Address" className="input input-bordered input-secondary w-full max-w-xs mb-4" />
                    <input type="text" placeholder="Enter Your Subject" className="input input-bordered input-secondary w-full max-w-xs mb-4" />
                    <textarea type="text" placeholder="Enter Your Subject" className="h-24 input input-bordered input-secondary w-full max-w-xs mb-4" />
                    <p></p>
                    <button className='btn bg-gradient-to-r from-primary to-secondary text-white w-1/4'>submit</button>
                </div>
            </div>
        </section >
    );
};

export default Contact;