 import { useState } from 'react'
import '../index.css'
import { useDispatch } from 'react-redux'
import { addUser } from '../store'
import { toast } from 'react-toastify'
import axios from 'axios'
import Loader from '../pages/Loader'
 
 const CreateUser = () => {
   const dispatch = useDispatch()
   const [email , setEmail] = useState('')
   const [name , setName] = useState('')
   const [phone , setPhone] = useState('')
   const [isLoading, setIsLoading] = useState(false)
   const handleSubmit=async(e)=>{
    e.preventDefault()
    setIsLoading(true)
    try {
      if(name.length===0 || email.length===0 || phone.length ===0 ){
        setIsLoading(false)
        return  toast.error('all fileds are required', {
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
      await axios.post('https://jsonplaceholder.typicode.com/users', {name,email,phone})
      dispatch(addUser({name , email, phone}))
 
       setEmail('')
       setName('')
       setPhone('')
       setIsLoading(false)
       toast.success('User created Successfully checkout users list', {
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
        setIsLoading(false)
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

   return (
    <div className="user-form panel">
    <h4 className="subtitle is-3 ">Add User</h4>
    <form onSubmit={ handleSubmit} >
      <div className="field-group">
        <div className="field">
            <label className="label">Name</label>
            <input className="input is-expanded" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="field">
            <label className="label">email</label>
            <input className="input is-expanded" type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="field">
            <label className="label">phone</label>
            <input className="input is-expanded" type='number' value={phone || ''} onChange={(e)=>setPhone(e.target.value)} />
        </div>
      </div>
             <div className="">
                <button className='button is-success' >  Submit</button>
             </div>
    </form>
    {isLoading && <Loader/>}
  </div>
   )
 }
 
 export default CreateUser