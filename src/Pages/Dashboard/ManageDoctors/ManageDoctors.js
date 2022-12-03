import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmationModal from '../../../components/ConfirmationModal/ConfirmationModal';
import Spinner from '../../../components/Spinner/Spinner';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://dentists-portal.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('AccessToken')}`
                    }
                });
                const data = await res.json();
                return data.doctors;
            } catch (error) {

            }
        }
    });

    const handleDoctorDelete = doctor => {
        fetch(`https://dentists-portal.vercel.app/doctor/${doctor._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('AccessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.status) {
                    toast.success(result.message);
                    refetch();
                } else {
                    toast.error(result.error);
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h2 className='text-3xl mb-5'>Manage Doctors</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            doctors?.map((doctor, index) => <tr key={doctor._id}>
                                <th>{index + 1}</th>
                                <td><img src={doctor.image} alt="" className='w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset' /></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-xs mr-2">Delete</label>
                                    <button className='btn btn-xs'>Edit</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    deletingDoctor={deletingDoctor}
                    setDeletingDoctor={setDeletingDoctor}
                    handleDoctorDelete={handleDoctorDelete}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;