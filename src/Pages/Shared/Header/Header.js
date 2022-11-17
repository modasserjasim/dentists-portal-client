import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../assets/images/dentist-logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Logged out from the site')
            })
            .catch(err => {
                toast.error(err.code)
            })
    }

    const inActive = "text-gray-800 uppercase btn-sm";
    const activeMenu = "btn btn-sm glass text-black"

    return (
        <div className='sticky top-0 bg-white/60 backdrop-blur-sm z-50'>
            <div>
                <div className="relative">
                    {/* For md screen size */}
                    {/* For large screens */}
                    <div className="px-6 py-4">
                        <div className="container mx-auto flex items-center justify-between">
                            <Link to='/' className="flex items-center gap-3 cursor-pointer" >
                                <img src={logo} alt="Logo" className='w-12' />
                                <h1 className="text-xl font-semibold">Dentists Portal</h1>
                            </Link>
                            <ul className="hidden md:flex items-center justify-center space-x-8">
                                <li>
                                    <NavLink to='/' className={({ isActive }) => isActive ? activeMenu : inActive} >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about' className={({ isActive }) => isActive ? activeMenu : inActive}>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/appointment' className={({ isActive }) => isActive ? activeMenu : inActive}>
                                        Appointment
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/reviews" className={({ isActive }) => isActive ? activeMenu : inActive}>
                                        Reviews
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className={({ isActive }) => isActive ? activeMenu : inActive}>
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="justify-end flex items-center space-x-4 xl:space-x-8">
                                {/* Login button desktop  */}
                                {
                                    user?.uid ? <>
                                        <Link to='/dashboard'><button className='btn btn-sm hidden md:block bg-gradient-to-tl from-primary to-secondary text-white border-0'>Dashboard</button></Link>
                                        <button onClick={handleLogOut} className='btn btn-sm hidden md:block bg-gradient-to-tl from-primary to-secondary text-white border-0'>Logout</button>
                                    </> : <Link to='/login'><button className='btn btn-sm hidden md:block bg-gradient-to-tl from-secondary to-primary text-white border-0'>Login</button></Link>
                                }
                                <div className="flex lg:hidden">
                                    <button aria-label="open menu" onClick={() => setShowMenu(true)} className="text-black md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                        {/* Menu icon  */}
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* For small screen */}
                    <div id="mobile-menu" className={`${showMenu ? "flex" : "hidden"} absolute  z-10 inset-0 md:hidden bg-white/95 backdrop-blur-lg flex-col h-screen w-full`}>
                        <div className="flex items-center justify-between border-b border-gray-200  px-6 py-4">
                            <div className="flex items-center space-x-3">
                                <div>
                                    <Link to='/' className="flex items-center gap-3 cursor-pointer" >
                                        <img src={logo} alt="Logo" className='w-12' />
                                        <h1 className="text-xl font-semibold">Dentists Portal</h1>
                                    </Link>
                                </div>
                            </div>
                            <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600">
                                <svg className="fill-stroke text-gray-800" width={24} height={24} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6 p-4">
                            <ul className="flex flex-col space-y-6">
                                <li>
                                    <NavLink to='/' className={({ isActive }) => isActive ? activeMenu : inActive}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about' className={({ isActive }) => isActive ? activeMenu : inActive}>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/appointment' className={({ isActive }) => isActive ? activeMenu : inActive}>
                                        Appointment
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/reviews" className={({ isActive }) => isActive ? activeMenu : inActive}>
                                        Reviews
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className={({ isActive }) => isActive ? activeMenu : inActive}>
                                        Contact
                                    </NavLink>
                                </li>

                                {
                                    user?.uid ? <>
                                        <li> <Link to='/dashboard'><button className='btn btn-sm   bg-gradient-to-tl from-primary to-secondary text-white border-0'>Dashboard</button></Link></li>
                                        <li> <button onClick={handleLogOut} className='btn btn-sm   bg-gradient-to-tl from-primary to-secondary text-white border-0'>Logout</button></li>
                                    </> : <li>
                                        <Link to='/login'><button className='btn btn-sm bg-gradient-to-tl from-secondary to-primary text-white border-0'>Login</button></Link>
                                    </li>
                                }

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;