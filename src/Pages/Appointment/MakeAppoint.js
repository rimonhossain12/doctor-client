import React from 'react';

const MakeAppoint = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <>
            <div className="card lg:max-w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-secondary text-xl font-semibold">{name}</h2>
                    <div>
                        <p>
                            {slots.length > 1} {slots[1]}
                        </p>
                        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button
                            onClick={() => setTreatment(service)}
                            className="btn bg-gradient-to-r from-primary to-secondary text-white"
                        >Make an appointment</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default MakeAppoint;