import React from 'react';

const BookingModal = ({ service, setTreatment }) => {
    const handleForm = (e) => {
        e.preventDefault();
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='mt-5'>
                        <form onSubmit={handleForm}>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs mb-2" />
                            <input type="submit" value="submit" className="btn-accent pointer input input-bordered w-full max-w-xs mb-2" />
                        </form>
                    </div>
                    {/* <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Submit</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;