import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Treatment from './Treatment';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointment = ({ selectedDate }) => {
    // const [treatments, setTreatments] = useState([]);
    // for popup data
    const [treatment, setTreatment] = useState(null);

    // using react query
    const { data: treatments = [] } = useQuery({
        queryKey: ['treatments'],
        queryFn: () => fetch('http://localhost:3500/treatments')
            .then(res => res.json())
    })
    // console.log(data);

    // useEffect(() => {
    //     fetch('http://localhost:3500/treatments')
    //         .then(res => res.json())
    //         .then(data => {
    //             setTreatments(data.treatments)
    //         })
    // }, [])
    return (
        <div className='py-10 md:py-16 container mx-auto px-4'>
            <h2 className='bg-gradient-to-r from-primary to-secondary bg-clip-text text-xl text-transparent sm:text-2xl text-center'>Available Appointments on <b>{format(selectedDate, 'PP')}</b></h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12'>
                {treatments?.map(treatment => <Treatment
                    key={treatment._id}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></Treatment>)}
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;