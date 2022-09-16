import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import CardForm from './components/CardForm'
import { useEffect } from 'react'
import CarList from './components/CarList'
function App() {
  
  const [cars, setCars] = useState([])
  const [carSelect, setCarSelect] = useState(null)

  useEffect(() =>{
    axios.get("https://cars-crud.herokuapp.com/cars/")
      .then(res => setCars(res.data))
  }, [])

  const getCars= () =>{
    axios.get("https://cars-crud.herokuapp.com/cars/")
      .then(res => setCars(res.data))
  }

  const deleteCar = (id) =>{
    axios.delete(`https://cars-crud.herokuapp.com/cars/${id}/`)
      .then(() => getCars())
  }

  const SelectCar = (car) =>{
    setCarSelect(car)
  }

  const updateCar = (car) =>{
    car.id = carSelect.id
    axios.put(`https://cars-crud.herokuapp.com/cars/${car.id}/`, car)
    .then(() => getCars())
  }

  const deselectCar = () => setCarSelect(null)

  console.log(cars);

  return (
    <div className="App">
      <h1> cars </h1>
      <CardForm 
      getCars={getCars}
      carSelect={carSelect}
      updateCar={updateCar}
      deselectCar={deselectCar}
      />
      <CarList
      cars={cars}
      deleteCar={deleteCar}
      SelectCar={SelectCar}
      />
    </div>
  )
}

export default App
