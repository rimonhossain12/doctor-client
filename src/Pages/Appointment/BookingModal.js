import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const [user] = useAuthState(auth)
    const { name, slots } = treatment;

    let formattedDate = format(date, 'PP');
    const handleForm = (e) => {
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const slot = e.target.slots.value;
        e.preventDefault();

        const bookingInfo = {
            serviceName: treatment.name,
            patientName: name,
            phone,
            email,
            slot,
            date: formattedDate
        }
        console.log('booking = ', bookingInfo);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Set an appointment on ${formattedDate} and ${slot}`)
                } else {
                    toast.error(`Already have an appointment on ${formattedDate} and ${slot}`);
                }
                console.log(data);
            });

        refetch();
        setTreatment(null)
    }
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

                            <select className="select select-bordered w-full max-w-xs mb-2" name='slots'>
                                {
                                    slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                                }
                            </select>
                            <input type="text" name='name' value={user?.displayName} disabled className="input input-bordered
                             w-full max-w-xs mb-2" />
                            <input type="email" name='email' value={user?.email} disabled className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="number" name='phone' placeholder="Phone Number" required className="input input-bordered
                             w-full max-w-xs mb-2" />
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