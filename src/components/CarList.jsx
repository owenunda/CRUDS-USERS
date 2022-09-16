import React from 'react';

const CarList = ({cars, deleteCar, SelectCar}) => {


    return (
        <div className='carlist-container'>
            <h1>Cars List</h1>
            <ul className='carlist' >
                {
                    cars.map(car =>(
                        <li className='car' key={car.id}>
                            <p><b>brand:</b> {car.brand} </p>
                            <p><b>model:</b> {car.model} </p>
                            <p><b>color:</b> {car.color} </p>
                            <p><b>year:</b> {car.year} </p>
                            <p><b>price:</b> {car.price} </p>
                            <button onClick={() => deleteCar(car.id)}>Delete</button>
                            <button onClick={() => SelectCar(car)}> Edit </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default CarList;