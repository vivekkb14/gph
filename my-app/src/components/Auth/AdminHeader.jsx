import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../utils/auth';
import './AdminHeader.css';

const AdminHeader = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="admin-header">
            <button onClick={handleLogout} className="logout-button">
                Logout
            </button>
        </div>
    );
};

export default AdminHeader;
