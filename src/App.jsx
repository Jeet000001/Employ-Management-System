import React, {  useState } from 'react'
import Login from './components/Auth/Login'
import EmployDashboard from './components/Dashboard/EmployDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'


const App = () => {

const [user, setUser] = useState(null)

const handelLogin = (email, password) => {
  if(email == "admin@me.com" && password == "123"){
    setUser('admin')
  }else if(email == "user@me.com" && password == "123") {
    setUser("employee")
  }else{
    alert("Invalid Login!!")
  }
}


  return (
    <>
      {/* show login when no user, otherwise show the appropriate dashboard */}
      {!user ? (
        <Login handelLogin={handelLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : (
        <EmployDashboard />
      )}
      
    </>
  )
}

export default App