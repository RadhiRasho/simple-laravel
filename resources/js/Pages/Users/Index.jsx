import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

export default function Fetch() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/users')
            .then(response => {
                setUsers(response.data.users);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <h3 className="font-semibold text-lg text-gray-800 leading-tight">Users</h3>
                        <ul>
                            {users.map(user => (
                                <li key={user.id}>{user.name} ({user.email})</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}