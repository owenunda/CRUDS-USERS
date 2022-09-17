import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({getUsers, userSelect, updateUser, isCreateUser, CreateUSer, setUSerSelect, errorAlert}) => {

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
                    .catch((error) =>{
                        console.log(error);
                        errorAlert()
                    })
        }
        clearForm()
        CreateUSer()
    }
    
    const clearForm = () =>{
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: ""
        })
        setUSerSelect(null)
    }

    const closeForm = () =>{
        CreateUSer()
        clearForm()
    }
    
    return (
        <div  className='form-container' style={{top: isCreateUser ? "0" : "-100%" }} >
            <div  className='cardForm'>
                <div className='cardForm-nav'>
                    <h1> {userSelect ? "Edit user" : "New user"} </h1>
                    <button  onClick={() => closeForm()}><i className="fa-solid fa-xmark"></i></button>
                </div>
            <form className='formUser' onSubmit={handleSubmit(submit)} >
                <div className='div-input'>
                    <label htmlFor="first_name"><i className="fa-regular fa-user"></i> Name</label>
                    <input type="text" id='first_name' {...register("first_name")} />
                </div>
                <div className='div-input'>
                    <label htmlFor="last_name"><i className="fa-regular fa-user"></i> last name</label>
                    <input type="text" id='last_name'  {...register("last_name")}  />
                </div>
                <div className='div-input'>
                    <label htmlFor="email"><i className="fa-solid fa-envelope"></i> email</label>
                    <input type="text" id='email' {...register("email")}  />
                </div>
                <div className='div-input'>
                    <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password</label>
                    <input type="password" id='password' {...register("password")}  />
                </div>
                <div className='div-input'>
                    <label htmlFor="birthday"><i className="fa-solid fa-cake-candles"></i> birthday</label>
                    <input type="date" id='birthday' {...register("birthday")}  />
                </div>
                <div className='btns'>
                <button className='btn btn-submit' >{userSelect ? "save Changes" : "add new user"}</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default UserForm;