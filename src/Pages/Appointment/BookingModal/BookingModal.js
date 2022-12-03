import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, slots, price } = treatment;
    const date = format(selectedDate, 'PP')
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;

        const bookingInfo = {
            treatmentName: name,
            appointmentDate: date,
            AppointmentTime: form.slot.value,
            patientName: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            price
        }
        // console.log(bookingInfo);

        fetch('https://dentists-portal.vercel.app/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setTreatment(null);
                    toast.success(data.message);
                    refetch();
                } else {
                    toast.error(data.message);
                }

            })


    }
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <div className="relative mt-3">
                            <input name='date' type="text" id="floating_outlined0" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" value={date} disabled />
                            <label htmlFor="floating_outlined0" className="absolute text-md text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Appointment Date</label>
                        </div>
                        {/* appointment time  */}
                        <div className="relative mt-3">
                            <select
                                name="slot"
                                id="floating_outlined_time"
                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                                placeholder='Select available time'
                                required
                            >
                                <option value="" selected disabled>Select available time</option>
                                {
                                    slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                                }

                            </select>
                            <label htmlFor="floating_outlined_time" className="absolute text-md text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Appointment Time</label>

                        </div>
                        {/* Appointment time  */}
                        <div className="relative mt-3">
                            <input name='name' type="text" defaultValue={user?.displayName} id="floating_outlined2" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label htmlFor="floating_outlined2" className="absolute text-md text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Full Name</label>
                        </div>
                        <div className="relative mt-3">
                            <input name='phone' type="tel" id="floating_outlined3" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label htmlFor="floating_outlined3" className="absolute text-md text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Phone Number</label>
                        </div>
                        <div className="relative my-3">
                            <input name='email' type="email" defaultValue={user?.email} id="floating_outlined4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label htmlFor="floating_outlined4" className="absolute text-md text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email Address</label>
                        </div>
                        <button
                            className="btn w-full btn-primary bg-gradient-to-r from-primary to-secondary text-white text-lg">Submit Booking</button>
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;