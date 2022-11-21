import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_Stripe_pk);
const Payment = () => {
    const { booking } = useLoaderData();
    // console.log('Inside data', booking);
    const { treatmentName, price, appointmentDate, AppointmentTime } = booking;
    return (
        <div>
            <h1 className='text-3xl mb-2'>Payment for {treatmentName}</h1>
            <p className='text-xl'>Please pay <b>${price}</b> for your appointment on <b>{appointmentDate}</b> at {AppointmentTime}</p>
            <div className='w-1/2 bg-gray-100 p-8 rounded-md my-7'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;