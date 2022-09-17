import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {
  const [users, setUsers] = useState([])
  const [userSelect, setUSerSelect] = useState(null)
  const [isCreateUser, setIscreateUser] = useState(false)
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
        CreateUSer()
  }
// esta funcion me elimina el usuario
  const deleteUSer = (id) =>{
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUsers())
  }


// esta funcion me actualiza los usuarios
  const updateUser = (user) =>{
      user.id = userSelect.id
      axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`, user)
        .then(() => getUsers() )
  }


const CreateUSer = () =>{
  setIscreateUser(!isCreateUser)
}


  return (
    <div className="App">
      <div className='nav'>
        <h1> <i className="fa-solid fa-users"></i> Users</h1>
        <button className='btn btn-create' onClick={() => CreateUSer()}>+ Create new user</button>
      </div>
    <UserForm getUsers={getUsers}
    userSelect={userSelect}
    setUSerSelect={setUSerSelect}
    updateUser={updateUser}
    isCreateUser={isCreateUser}
    CreateUSer={CreateUSer}
    />
    <UserList  users={users}
    deleteUSer={deleteUSer}
    userSelection={userSelection}
    /> 
    </div>
  )
}

export default App
