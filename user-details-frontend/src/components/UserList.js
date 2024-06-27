import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(() => setUsers(users.filter(user => user._id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>User List</h1>
            <Link to="/add">Add User</Link>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.firstName} {user.lastName}
                        <Link to={`/edit/${user._id}`}>Edit</Link>
                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
