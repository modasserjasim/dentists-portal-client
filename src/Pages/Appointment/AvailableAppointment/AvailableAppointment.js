import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Treatment from './Treatment';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../components/Spinner/Spinner';

const AvailableAppointment = ({ selectedDate }) => {
    // const [treatments, setTreatments] = useState([]);
    // for popup data
    const [treatment, setTreatment] = useState(null);

    // for reduce the slot
    const date = format(selectedDate, 'PP');
    // using react query
    const { data: treatments = [], refetch, isLoading } = useQuery({
        queryKey: ['treatments', date],
        queryFn: async () => {
            const res = await fetch(`https://dentists-portal.vercel.app/treatments?date=${date}`);
            const data = await res.json();
            return data
        }
    })
    // console.log(data);

    // useEffect(() => {
    //     fetch('https://dentists-portal.vercel.app/treatments')
    //         .then(res => res.json())
    //         .then(data => {
    //             setTreatments(data.treatments)
    //         })
    // }, [])

    if (isLoading) {
        return <Spinner></Spinner>;
    }
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
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;