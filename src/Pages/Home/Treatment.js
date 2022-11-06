import React from 'react';

const Treatment = ({ treatment }) => {
    const { name, img, desc } = treatment;
    return (
        <div className="card lg:max-w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-center'>{desc}</p>
            </div>
        </div>
    );
};

export default Treatment;