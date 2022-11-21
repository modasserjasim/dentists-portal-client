import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const Users = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3500/users');
            const data = await res.json();
            return data.users;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:3500/user/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem('AccessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.status) {
                    toast.success(data.message)
                    refetch();
                } else {
                    toast.error(data.message)
                }

            })
    }
    return (
        <div>
            <h2 className='text-3xl mb-5'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td> {
                                    user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs bg-primary text-white border-0'>Make Admin</button>
                                }</td>
                                <td>
                                    <button className='btn btn-xs mr-2'>Delete</button>
                                    <button className='btn btn-xs'>Edit</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;