import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentHero = ({ selectedDate, setSelectedDate }) => {

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className="px-4">
            <div className="max-w-4xl flex gap-10 md:gap-20 flex-col-reverse mx-auto py-5 sm:py-12 lg:py-24 md:flex-row lg:justify-between">
                <div className="flex flex-col justify-center text-center rounded-sm lg:text-left md:w-1/2">
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
                <div className="flex items-center justify-center lg:mt-0 md:w-1/2">
                    <img src={chair} alt="" className="object-contain" />
                </div>
            </div>
        </div>
    );
};

export default AppointmentHero;