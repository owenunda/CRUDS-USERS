import React from 'react';

const UserList = ({users, deleteUSer}) => {

    return (
        <div>
            <h1>user list</h1>
            <ul>
                {
                    users?.map(user =>(
                        <li key={user.id}>
                            <h3> {user.first_name} {user.last_name} </h3>
                            <p> {user.email} </p>
                            <p> {user.birthday} </p>
                            <button onClick={() => deleteUSer(user.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UserList;