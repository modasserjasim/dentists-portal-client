import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import { BsCalendar4Week, BsPlusCircleDotted, BsPerson } from "react-icons/bs";
import { GiDoctorFace } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import { toast } from 'react-toastify';

const DashboardLayout = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Logged out from the site')
            })
            .catch(err => {
                toast.error(err.code)
            })
    }
    const inActive = "flex justify-start items-center gap-2 text-white uppercase btn btn-sm btn-ghost";
    const activeMenu = "flex justify-start items-center gap-2 btn btn-sm glass text-white"
    return (
        <div>
            <Header></Header>
            <div className="sm:flex border-t">
                <div className="flex flex-col md:min-h-screen p-3 bg-gradient-to-r from-primary to-secondary md:w-60">
                    <div className="space-y-3 md:sticky md:top-24">
                        <div className="flex items-center justify-center md:justify-start">
                            <h2 className="text-xl text-center md:text-left font-bold">Dashboard</h2>
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-3 text-sm flex justify-between items-center sm:block">
                                <li className="rounded-sm">
                                    <NavLink to='/dashboard' className={({ isActive }) => isActive ? activeMenu : inActive} >
                                        <BsCalendar4Week />
                                        <span className='hidden sm:block'>My Appointment</span>
                                    </NavLink>
                                </li>
                                {
                                    isAdmin && <>

                                        <li className="rounded-sm">
                                            <NavLink to='/dashboard/add-doctor' className={({ isActive }) => isActive ? activeMenu : inActive} >
                                                <BsPlusCircleDotted className='text-lg' />
                                                <span className='hidden sm:block'>Add A Doctor</span>
                                            </NavLink>
                                        </li>
                                        <li className="rounded-sm">
                                            <NavLink to='/dashboard/manage-doctors' className={({ isActive }) => isActive ? activeMenu : inActive} >
                                                <GiDoctorFace className='text-xl' />
                                                <span className='hidden sm:block'>Manage Doctors</span>
                                            </NavLink>
                                        </li>
                                        <li className="rounded-sm">
                                            <NavLink to='/dashboard/users' className={({ isActive }) => isActive ? activeMenu : inActive} >
                                                <BsPerson className='text-2xl' />
                                                <span className='hidden sm:block'>Users</span>
                                            </NavLink>
                                        </li>
                                    </>
                                }
                                <li className="rounded-sm">
                                    <button onClick={handleLogOut} className={inActive} >
                                        <BsPerson className='text-2xl' />
                                        <span className='hidden sm:block'>Sign out</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-auto my-7 sm:my-12 container px-5 md:px-20 lg:px-32">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;