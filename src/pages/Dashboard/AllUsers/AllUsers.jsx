import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            return res.json();
        }
    })

    const handleMakeAdmin = user => {
        // console.log(id);
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    alert(`${user.name} is ADMIN NOW`)
                }
            })
    }

    const handleDelete = user => {

    }

    return (
        <div className='w-full'>
            <h1 className='text-3xl text-center'>Total users: {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => handleMakeAdmin(user)} className='btn btn-secondary'>{user.role == 'admin' ? 'ADMIN' : 'Make Admin?'}</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className='btn btn-error btn-sm'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;