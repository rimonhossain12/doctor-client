import React from 'react';
import quote from '../../../src/assets/icons/quote.svg';

const Testimonial = () => {
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div className='text-start'>
                    <h4 className='text-xl font-bold text-primary py-5'>Appointment</h4>
                    <h3 className='text-3xl'>What our Patient say.</h3>
                </div>
                <div>
                    {/* <figure> */}
                    <img src={quote} alt="" className='sm:w-24 lg:w-48' />
                    {/* </figure> */}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;