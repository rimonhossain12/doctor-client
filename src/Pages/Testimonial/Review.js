import React from 'react';

const Review = ({ review }) => {
    const { img, desc, location, name } = review;

    return (
        <div className="lg:card-side shadow-xl lg:px-3 rounded-lg">
            <div className="card-body text-start">
                <p className=''>{desc}</p>
            </div>
            <div className="flex items-center">
                <div className="avatar">
                    <div>
                        <figure className='ml-5'>
                            <img src={img} className="w-24 h-24" alt="not found" />
                        </figure>
                    </div>
                    <div className='ml-5 text-justify mt-5'>
                        <h4 className='text-accent font-bold text-xl ml-0'>{name}</h4>
                        <p className='text'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;