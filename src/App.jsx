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
    

  const deleteUSer = (id) =>{
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUsers())
  }





  return (
    <div className="App">
    <h1>hola</h1>
    <UserForm getUsers={getUsers} />
    <UserList  users={users}
    deleteUSer={deleteUSer}
    /> 
    </div>
  )
}

export default App
