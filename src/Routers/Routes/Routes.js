import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout"
import Main from "../../Layout/Main"
import About from "../../Pages/About/About"
import Appointment from "../../Pages/Appointment/Appointment/Appointment"
import Contact from "../../Pages/Contact/Contact"
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor"
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors"
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment"
import Payment from "../../Pages/Dashboard/Payment/Payment"
import Users from "../../Pages/Dashboard/Users/Users"
import ErrorPage from "../../Pages/ErrorPage/ErrorPage"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login"
import Reviews from "../../Pages/Reviews/Reviews"
import SignUp from "../../Pages/SignUp/SignUp"
import AdminRoute from "../AdminRoute/AdminRoute"
import PrivateRoute from "../PrivateRoute/PrivateRoute"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },

        ]
    },
    {
        path: '/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><Users></Users></AdminRoute>
            },
            {
                path: '/dashboard/add-doctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/manage-doctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dentists-portal.vercel.app/booking/${params.id}`)
            },
        ]
    },
])