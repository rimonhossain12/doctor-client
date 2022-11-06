import React from 'react';
import fluoride from '../../../src/assets/images/fluoride.png';
import Cavity from '../../../src/assets/images/cavity.png';
import Whitening from '../../../src/assets/images/whitening.png';
import Treatment from './Treatment';


const ShowTreatment = () => {
    const treatments = [
        {
            _id: '1',
            name: "Fluoride Treatment",
            img: fluoride,
            desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus consectetur ab.'

        },
        {
            _id: '2',
            name: "Cavity Fillings",
            img: Cavity,
            desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus consectetur ab.'

        },
        {
            _id: '3',
            name: "Teeth Whitening",
            img: Whitening,
            desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloribus consectetur ab.'

        },

    ]
    return (
        <section>
            <div className='text-start py-10 lg:hidden'>
                <h3 className='text-secondary uppercase text-2xl mb-3'>Our services</h3>
                <h2 className='text-accent text-4xl'>Services We Provided</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
                {
                    treatments.map(treatment => <Treatment
                        key={treatment._id}
                        treatment={treatment}
                    />)
                }
            </div>
        </section>
    );
};

export default ShowTreatment;