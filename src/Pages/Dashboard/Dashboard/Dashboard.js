import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>

        </div>
    );
};

export default Dashboard;