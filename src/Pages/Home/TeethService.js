import React from 'react';
import teeth from '../../../src/assets/images/treatment.png'

const TeethService = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img src={teeth} alt='not found' className="max-w-sm w-full rounded-lg shadow-2xl" />
                <div className='text-start'>
                    <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care. On Your Terms</h1>
                    <p className="py-6 leading-loose">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam asperiores dolor repellat, porro
                        magni exercitationem? Ullam eveniet quam aperiam, consectetur laboriosam cupiditate cum quaerat optio
                        provident, nihil veniam cumque nemo quo! Esse recusandae labore soluta perspiciatis,
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TeethService;