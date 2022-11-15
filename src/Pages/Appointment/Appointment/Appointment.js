import React, { useState } from 'react';
import AppointmentHero from '../AppointmentHero/AppointmentHero';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentHero
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentHero>
            <AvailableAppointment
                selectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;