import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({getUsers, userSelect, updateUser}) => {

    const { register, handleSubmit, reset } = useForm();

    useEffect(() =>{
            reset(userSelect)
    }, [userSelect])


    const submit = data =>{
        if (userSelect) {
            updateUser(data)
        }else{
            axios.post(`https://users-crud1.herokuapp.com/users/`, data)
                    .then(() => getUsers())
                .catch(error => console.log(error.response))
        }
    }
    
    const clearForm = () =>{
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: ""
        })
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
                    <input type="text" id='email' {...register("email")}  />
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
                <button type='button' onClick={() => clearForm()}> clear</button>
            </form>
        </div>
    );
};

export default UserForm;