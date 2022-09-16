import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({getUsers}) => {
    const { register, handleSubmit } = useForm();



    const submit = data =>{
        axios.post(`https://users-crud1.herokuapp.com/users/`, data)
                .then(() => getUsers())
            .catch(error => console.log(error.response))
    }

    
    return (
        <div className='form-container'>
            <h1> Nuevo Usuario </h1>
            <form onSubmit={handleSubmit(submit)} >
                <div>
                    <label htmlFor="first_name">Name</label>
                    <input type="text" id='first_name' {...register("first_name")} />
                </div>
                <div>
                    <label htmlFor="last_name">last name</label>
                    <input type="text" id='last_name'  {...register("last_name")}  />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input type="email" id='email' {...register("email")}  />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' {...register("password")}  />
                </div>
                <div>
                    <label htmlFor="birthday">birthday</label>
                    <input type="date" id='birthday' {...register("birthday")}  />
                </div>
                <button> submit</button>
            </form>
        </div>
    );
};

export default UserForm;