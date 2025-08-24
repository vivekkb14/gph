import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isLoggedIn } from '../../utils/auth';

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    if (!isLoggedIn()) {
        // Redirect to login but remember where they were trying to go
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
