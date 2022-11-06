import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { name, slots } = treatment;
    const handleForm = (e) => {
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        console.log({ name, phone, email });


        e.preventDefault();
        setTreatment(null)
    }
    let formattedDate = format(date, 'PP');
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='mt-5'>
                        <form onSubmit={handleForm}>
                            <input type="text" name='date' value={formattedDate} disabled className="input input-bordered w-full max-w-xs mb-2" />

                            <select className="select select-bordered w-full max-w-xs mb-2">
                                {
                                    slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                                }
                            </select>


                            <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="email" name='email' placeholder="Email Address" className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="submit"
                                value="submit"
                                className="btn-accent cursor-pointer input input-bordered w-full max-w-xs mb-2"
                                htmlFor="booking-modal"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;