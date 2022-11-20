import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const inActive = "flex justify-start gap-2 text-white uppercase btn btn-sm btn-ghost";
    const activeMenu = "flex justify-start gap-2 btn btn-sm glass text-white"
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                        <span className='hidden sm:block'>My Appointment</span>
                                    </NavLink>
                                </li>
                                {
                                    isAdmin && <>

                                        <li className="rounded-sm">
                                            <NavLink to='/dashboard/add-doctor' className={({ isActive }) => isActive ? activeMenu : inActive} >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                    />
                                                </svg>
                                                <span className='hidden sm:block'>Add A Doctor</span>
                                            </NavLink>
                                        </li>
                                        <li className="rounded-sm">
                                            <NavLink to='/dashboard/manage-doctors' className={({ isActive }) => isActive ? activeMenu : inActive} >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                    />
                                                </svg>
                                                <span className='hidden sm:block'>Manage Doctors</span>
                                            </NavLink>
                                        </li>
                                        <li className="rounded-sm">
                                            <NavLink to='/dashboard/users' className={({ isActive }) => isActive ? activeMenu : inActive} >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                    />
                                                </svg>
                                                <span className='hidden sm:block'>Users</span>
                                            </NavLink>
                                        </li>
                                    </>
                                }
                                <li className="rounded-sm">
                                    <NavLink to='/home' className={({ isActive }) => isActive ? activeMenu : inActive} >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                        <span className='hidden sm:block'>Logout</span>
                                    </NavLink>
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