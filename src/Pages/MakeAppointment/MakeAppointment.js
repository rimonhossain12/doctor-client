import React from 'react';
import doctor from '../../../src/assets/images/doctor.png';
import appointment from '../../../src/assets/images/appointment.png';

const MakeAppointment = () => {
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
            <div className='flex-1 hidden lg:block'>
                <figure>
                    <img src={doctor} alt="" className='mt-[-120px] w-3/4 rounded-lg' />
                </figure>
            </div>
            <div className="flex-1">
                <div className='py-5 text-start px-10'>
                    <h3 className='text-primary text-1xl font-bold mb-5'>Appointment</h3>
                    <h2 className='text-3xl text-white'>Make an appointment today</h2>
                    <p className='text-white text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit itaque
                        aspernatur eveniet architecto necessitatibus officiis, error quos porro aut
                        earum nemo, vero quidem provident tempora praesentium obcaecati, harum
                        mollitia quia saepe numquam animi non molestiae? Eius eveniet quas hic sit?
                    </p>
                </div>

            </div>
        </section >
    );
};

export default MakeAppointment;