import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const CardForm = ({getCars, carSelect, updateCar,deselectCar}) => {


    const {register, handleSubmit, reset} = useForm()

    useEffect(() =>{
        if(carSelect){
            reset(carSelect)
        }
    }, [carSelect])

    const submit = (data) =>{
        if (carSelect) {
            updateCar(data)
        }else{
            // creando pelicula
            axios.post("https://cars-crud.herokuapp.com/cars/", data)
                .then(() => getCars())
                .catch(error => console.log(error.response))
        }
        clearForm()
    }

    const clearForm = () =>{
        reset({
            brand: "",
            model: "",
            color: "",
            year: "",
            price: ""
        })
        deselectCar()
    }

    return (
        <form  className='formCar' onSubmit={handleSubmit(submit)}>
            <div className="input-container">
                <label htmlFor="brand">brand</label>
                <input type="text"  id="brand" {...register("brand")} />
            </div>
            <div className="input-container">
                <label htmlFor="model">model</label>
                <input type="text"  id="model" {...register("model")}/>
            </div>
            <div className="input-container">
                <label htmlFor="color">color</label>
                <input type="text"  id="color" {...register("color")}/>
            </div>
            <div className="input-container">
                <label htmlFor="year">year</label>
                <input type="number" id="year" {...register("year")}/>
            </div>
            <div className="input-container">
                <label htmlFor="price">price</label>
                <input type="text"  id="price" {...register("price")} />
            </div>
            <button>{carSelect ? "update" : "submit"}</button>
            <button type='button' onClick={() => clearForm()}> clear </button>
        </form>
    );
};

export default CardForm;