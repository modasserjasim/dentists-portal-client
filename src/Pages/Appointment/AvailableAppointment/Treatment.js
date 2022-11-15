import React from 'react';

const Treatment = ({ treatment }) => {
    const { name, slots } = treatment;
    return (
        <div className="card bg-base-100 shadow-md border border-gray-50">
            <div className="card-body items-center text-center">
                <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl text-transparent sm:text-xl text-center">{name}</h2>
                <p className='uppercase text-sm'>{slots?.length > 0 ? slots[0] : 'Try Another day!'}</p>
                <p className='uppercase text-xs'>{slots?.length > 1 ? slots?.length + ' spaces available' : slots?.length + ' space available'} </p>
                <button className='btn btn-primary btn-sm text-white bg-gradient-to-r from-primary to-secondary'>Book Appointment</button>
            </div>
        </div>
    );
};

export default Treatment;