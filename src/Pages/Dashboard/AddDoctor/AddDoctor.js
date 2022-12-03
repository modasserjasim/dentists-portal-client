import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../../components/Spinner/Spinner';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    // get specialty name from db collection
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://dentists-portal.vercel.app/appointment-specialty');
            const data = await res.json();
            // console.log(data);
            return data;

        }
    })

    const handleAddDoctor = data => {

        // add image to imagebb
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        // console.log(image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);
                if (imgData.success) {
                    const doctorImg = (imgData.data.url);
                    // console.log(doctorImg);
                    const doctorInfo = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: doctorImg

                    }
                    //save doctors information to the database
                    fetch('https://dentists-portal.vercel.app/doctors', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('AccessToken')}`
                        },
                        body: JSON.stringify(doctorInfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.status) {
                                toast.success(result.message);
                                navigate('/dashboard/manage-doctors')
                            } else {
                                toast.error(result.error)
                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h1 className='text-3xl mb-5'>Add A Doctors</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)} className="bg-white shadow rounded lg:w-2/4  md:w-1/2 w-full p-5 md:p-10">
                <div className="relative">
                    <input {...register("name", { required: "Name is required" })} type="text" name='name' id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                    <label htmlFor="floating_outlined" className="absolute text-md text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Doctor Name</label>
                    <div>
                        {errors.name && <p role="alert" className='text-red-700 text-xs'>{errors.name?.message}</p>}
                    </div>
                </div>
                <div className="relative mt-4">
                    <input {...register("email", { required: "Email Address is required" })} type="email" id="floating_outlined2" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                    <label htmlFor="floating_outlined2" className="absolute text-md text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email Address</label>
                    <div>
                        {errors.email && <p role="alert" className='text-red-700 text-xs'>{errors.email?.message}</p>}
                    </div>
                </div>
                <div className="relative mt-4">
                    <select {...register("specialty", { required: "Specialty is required" })}
                        name="slot"
                        id="floating_outlined_time"
                        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder='Select Specialty'
                        required
                    >
                        {
                            specialties?.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                        }

                    </select>
                    <label htmlFor="floating_outlined_time" className="absolute text-md text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Select Specialty</label>

                </div>
                <div className="relative mt-4">
                    <input {...register("img", { required: "Image is required" })} type="file" name='img' id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                    <label htmlFor="floating_outlined" className="absolute text-md text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Choose Doctor Photo</label>
                    <div>
                        {errors.img && <p role="alert" className='text-red-700 text-xs'>{errors.img?.message}</p>}
                    </div>

                </div>

                <div className="mt-8">
                    <button type="submit" className="text-lg rounded-md font-semibold leading-none text-white focus:outline-none bg-gradient-to-tl from-primary to-secondary border hover:bg-secondary py-4 w-full">
                        Add New Doctor
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;