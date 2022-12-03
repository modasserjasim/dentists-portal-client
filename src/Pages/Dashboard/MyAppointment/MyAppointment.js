import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const url = `https://dentists-portal.vercel.app/bookings?email=${user?.email}`;
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('AccessToken')}`
                }
            });
            const data = await res.json();
            return data.bookings;
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>;
    }
    return (
        <div>
            <h2 className='text-3xl mb-5'>My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            bookings?.map((booking, index) => <tr key={booking._id}>
                                <th>{index + 1}</th>
                                <td>{booking.patientName}</td>
                                <td>{booking.treatmentName}</td>
                                <td>${booking?.price}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.AppointmentTime}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button
                                                className='btn btn-primary btn-sm text-white'>PAY</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <button
                                            className='btn btn-primary btn-sm disabled'>PAID</button>
                                    }
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;