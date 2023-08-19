 
 
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Navbar'
import CreateUser from './components/CreateUser'
import UserList from './components/userList'
import { useEffect, useState } from 'react'
import { setUsers } from './store'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
   const dispatch = useDispatch()
const [isLoading,setIsLoading] = useState(false)
  const fetchUsers = async()=>{
     setIsLoading(true)
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch(setUsers(response.data))
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        toast.error( "Check your internet connection ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
  }




  useEffect(()=>{
 fetchUsers()
  },[])
 

  return (
    <>
     <Navbar/>
    

     <Routes>
      <Route path = '/' element = {<UserList isLoading = {isLoading} />}/>
      <Route path = '/create' element = { <CreateUser/>}/>
     </Routes>
     <ToastContainer />
    </>
  )
}

export default App
