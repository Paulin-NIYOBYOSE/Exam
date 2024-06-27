// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
            <h1 className="text-4xl font-bold text-white mb-8">Welcome to the User Management App</h1>
            <div className="flex space-x-4">
                <Link to="/users" className="bg-white text-blue-600 font-bold py-2 px-4 rounded shadow-lg">View Users</Link>
                <Link to="/add" className="bg-white text-blue-600 font-bold py-2 px-4 rounded shadow-lg">Add User</Link>
            </div>
        </div>
    );
};

export default LandingPage;
