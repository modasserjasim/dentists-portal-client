import React from 'react';

const Treatment = ({ treatment, setTreatment }) => {
    const { name, slots } = treatment;
    return (
        <div className="card bg-base-100 shadow-xl border border-gray-50">
            <div className="card-body items-center text-center">
                <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl text-transparent sm:text-xl text-center">{name}</h2>
                <p className='uppercase text-sm'>{slots?.length > 0 ? slots[0] : 'Try Another day!'}</p>
                <p className='uppercase text-xs'>{slots?.length > 1 ? slots?.length + ' spaces available' : slots?.length + ' space available'} </p>

                <label onClick={() => setTreatment(treatment)}
                    disabled={slots.length === 0}
                    htmlFor="booking-modal"
                    className='btn btn-primary btn-sm text-white bg-gradient-to-r from-primary to-secondary'>Book Appointment</label>
            </div>
        </div>
    );
};

export default Treatment;