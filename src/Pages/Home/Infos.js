import React from 'react';

const Infos = ({ name, desc, bgColor, img }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgColor} lg:px-3`}>
            {/* <div className='mt-5'> */}
            <figure className='sm: mt-5'><img src={img} alt="Album" /></figure>
            {/* </div> */}
            <div className="card-body text-start">
                <h2 className="card-title">{name}</h2>
                <p>{desc}.</p>
            </div>
        </div>
    );
};

export default Infos;