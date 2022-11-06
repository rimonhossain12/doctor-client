import React from 'react';

const SampleService = ({ service }) => {
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-secondary text-2xl font-lighter">{service?.name}</h2>
            </div>
        </div>
    );
};

export default SampleService;