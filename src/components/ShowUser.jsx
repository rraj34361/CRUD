/* eslint-disable react/prop-types */
 import { useDispatch } from 'react-redux'
import '../index.css'
import { deleteUser } from '../store'
import { useState } from 'react'
import EditUser from './EditUser'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loader from '../pages/Loader'

const ShowUser = ({name,email,phone,id}) => {
  const [toggle,setToggle] = useState(false)
  const [isLoading , setIsLoading] = useState(false)
  const toggleEdit = ()=>{
   setToggle(true)
  }
  const dispatch = useDispatch()
 const  handleUserDelete = async(id)=>{
       setIsLoading(true)
       try {
          await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
         dispatch(deleteUser(id))
 
      setIsLoading(false)
      toast.success('User deleted Successfully ', {
       position: "top-right",
       autoClose: 3000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       });
     } catch (error) {
      toast.error('Internal server error', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
     }
        
 }

 const onClose = ()=>{
  setToggle(false)
 }

 const edit = <EditUser  name = {name} email = {email} phone = {phone} id ={id} onClose = {onClose}>
        
 </EditUser>

  return (
   <>
       {toggle && edit}
    
    <div className={`panel show bold`}>
           
             <div className='elements'> <p> <label>Name:- {name} </label>    <label>Email:-  {email} </label>    <label> Phone No:-{phone}</label>    </p> </div>
           
            <div className='btns'>
            <button  className="button is-warning" onClick={toggleEdit}>Edit</button>
            <button onClick={()=>handleUserDelete(id)} className="button is-danger">Delete</button>
            </div>
        </div>

     {isLoading && <Loader/>}

   </>
  )
}

export default ShowUser