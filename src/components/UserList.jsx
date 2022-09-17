import React from 'react';

const UserList = ({users, deleteUSer, userSelection}) => {

    return (
        <div className='users-container'>
            <ul>
                {
                    users?.map(user =>(
                        <li key={user.id} className="list-user">
                            <h3> <i className="fa-solid fa-user"></i> {user.first_name} {user.last_name} </h3>
                            <hr />
                            <p> <span>EMAIL</span><br /> {user.email} </p>
                            <p> <span>BIRTHDAY</span><br /> <i className="fa-solid fa-cake-candles"></i> {user.birthday} </p>
                            <div className='btn-user'>
                            <button onClick={() => deleteUSer(user)}><i className="fa-solid fa-trash"></i></button>
                            <button onClick={() => userSelection(user)}><i className="fa-solid fa-user-pen"></i></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UserList;