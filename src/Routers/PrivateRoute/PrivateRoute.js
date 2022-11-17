import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner></Spinner>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;