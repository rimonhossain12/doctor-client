import React from 'react';
import chair from '../../../src/assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='not found' className="max-w-sm w-full rounded-lg shadow-2xl" />
                    <div className='text-start'>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6 leading-loose">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam asperiores dolor repellat, porro
                            magni              exercitationem? Ullam eveniet quam aperiam, consectetur laboriosam cupiditate cum quaerat optio
                            provident, nihil veniam cumque nemo quo! Esse recusandae labore soluta perspiciatis,
                        </p>
                        <PrimaryButton>Get started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;