import React from 'react';
import quote from '../../../src/assets/icons/quote.svg';
import people1 from '../../../src/assets/images/people1.png';
import people2 from '../../../src/assets/images/people2.png';
import people3 from '../../../src/assets/images/people3.png';
import Review from './Review';


const Testimonial = () => {

    // review user
    const Reviews = [
        {
            _id: "1",
            name: 'Winson Herry',
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             In repellendus ipsam odit doloribus harum rerum qui necessitatibus totam fuga corporis!`,
            img: people1,
            location: 'California'
        },
        {
            _id: "2",
            name: 'Jessica Herry',
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             In repellendus ipsam odit doloribus harum rerum qui necessitatibus totam fuga corporis!`,
            img: people2,
            location: 'California'
        },
        {
            _id: "3",
            name: 'Alia Bhat',
            desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             In repellendus ipsam odit doloribus harum rerum qui necessitatibus totam fuga corporis!`,
            img: people3,
            location: 'California'
        },

    ]

    return (

        <section className='my-28'>
            <div className='flex justify-between'>
                <div className='text-start'>
                    <h4 className='text-xl font-bold text-primary py-5'>Appointment</h4>
                    <h3 className='text-3xl'>What our Patient say.</h3>
                </div>
                <div>
                    <img src={quote} alt="" className='sm:w-24 lg:w-48' />
                </div>
            </div>
            <div className='mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    Reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
        </section>
    );
};

export default Testimonial;