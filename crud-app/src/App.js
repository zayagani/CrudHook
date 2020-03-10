import './App.css';
import AddUserForm from './Component/AddUserForm';
import UserTable from './Component/UserTable';
import  deleteUser from './Component/deleteUser';
import React, { useState } from 'react'
import EditUserForm from './Component/EditUserForm'
  const App = () => {

    const usersData = [
      { id: 1, name: 'Tania', username: 'floppydiskette' },
      { id: 2, name: 'Craig', username: 'siliconeidolon' },
      { id: 3, name: 'Ben', username: 'benisphere' },
    ]
  
    const [users, setUsers] = useState(usersData)
  
    const addUser = user => {
      user.id = users.length + 1
      setUsers([...users, user])
    }


   /* const editRow = user => {
      setEditing(true)
  
      setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }
*/



    return (
      <div className="container">
      <h1>CRUD App with Hooks</h1>

      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
         
          <UserTable users={users} deleteUser={deleteUser} />

        </div>
      </div>
    </div>
    );
  }
//}

export default App;
