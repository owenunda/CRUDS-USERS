import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([])
  const [userSelect, setUSerSelect] = useState(null)
  // me muestra a los usuarios en cada render que haga
  useEffect(() =>{
    getUsers()
  }, [])

  // me trae a los usuarios de la api
    const getUsers = () =>{
      axios.get(`https://users-crud1.herokuapp.com/users/`)
        .then(res => setUsers(res.data))
    }


    /// aca funcion me seleciona el usuario actual
  const userSelection = (user) =>{
        setUSerSelect(user)
        console.log(user)
  }
// esta funcion me elimina el usuario
  const deleteUSer = (id) =>{
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUsers())
  }

  
  const updateUser = (user) =>{
      user.id = userSelect.id
      axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`, user)
        .then(() => getUsers() )
  }





  return (
    <div className="App">
    <h1>hola</h1>
    <UserForm getUsers={getUsers}
    userSelect={userSelect}
    updateUser={updateUser}
    />
    <UserList  users={users}
    deleteUSer={deleteUSer}
    userSelection={userSelection}
    /> 
    </div>
  )
}

export default App
