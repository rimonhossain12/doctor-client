import React from 'react';
import appointment from '../../../src/assets/images/appointment.png';

const Contact = () => {
    return (
        <section className="flex justify-center items-center my-5"
            style={{
                background: `url(${appointment})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
            }}
        >
            <div>
                Hello world
            </div>
        </section >
    );
};

export default Contact;