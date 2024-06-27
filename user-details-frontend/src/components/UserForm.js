import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UserForm = () => {
    const [user, setUser] = useState({
        title: '',
        firstName: '',
        lastName: '',
        position: '',
        company: '',
        businessArena: '',
        employees: '',
        street: '',
        additionalInfo: '',
        zipCode: '',
        place: '',
        country: '',
        code: '',
        phoneNumber: '',
        email: ''
    });

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3000/users/${id}`)
                .then(response => setUser(response.data))
                .catch(error => console.error(error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            axios.put(`http://localhost:3000/users/${id}`, user)
                .then(() => navigate('/'))
                .catch(error => console.error(error));
        } else {
            axios.post('http://localhost:3000/users', user)
                .then(() => navigate('/'))
                .catch(error => console.error(error));
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 to-blue-200">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
                <div className="grid grid-cols-2 gap-4 p-6">
                    <div>
                        <h2 className="text-xl font-semibold text-blue-600 mb-4">General Information</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                            <input name="title" value={user.title} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                                <input name="firstName" value={user.firstName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                                <input name="lastName" value={user.lastName} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Position</label>
                            <input name="position" value={user.position} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                            <input name="company" value={user.company} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Business Arena</label>
                                <input name="businessArena" value={user.businessArena} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Employees</label>
                                <input name="employees" type="number" value={user.employees} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-600 p-6 rounded-lg text-white">
                        <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Street + Nr</label>
                            <input name="street" value={user.street} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Additional Information</label>
                            <input name="additionalInfo" value={user.additionalInfo} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-bold mb-2">Zip Code</label>
                                <input name="zipCode" value={user.zipCode} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-bold mb-2">Place</label>
                                <input name="place" value={user.place} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Country</label>
                            <input name="country" value={user.country} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label className="block text-sm font-bold mb-2">Code +</label>
                                <input name="code" value={user.code} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="w-1/2">
                                <label className="block text-sm font-bold mb-2">Phone Number</label>
                                <input name="phoneNumber" value={user.phoneNumber} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">Email</label>
                            <input name="email" type="email" value={user.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2">
                                <input type="checkbox" className="mr-2 leading-tight" /> I do accept the <a href="#" className="text-white underline">Terms and Conditions</a> of your site.
                            </label>
                        </div>
                        <button type="submit" className="bg-white text-blue-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register Badge</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
