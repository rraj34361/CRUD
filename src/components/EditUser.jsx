
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '../pages/Loader';

function EditUser({ name , email,phone, id , children,onClose }) {
  const dispatch = useDispatch()
  const [changedEmail , setEmail] = useState(email)
  const [changedName , setName] = useState(name)
  const [ChangedPhone , setPhone] = useState(phone)
  const [isLoading , setIsLoading] = useState(false)

  const handleSubmit = async(e)=>{
   e.preventDefault()
   setIsLoading(true)
   try {
    if(changedName.length===0 || changedEmail.length===0 || ChangedPhone.length ===0 ){
      setIsLoading(false)
      return  toast.error('fields can"t be empty', {
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
     await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,{name : changedName , email : changedEmail, phone : ChangedPhone , id})
     dispatch(updateUser({name : changedName , email : changedEmail, phone : ChangedPhone , id}))
  
    setIsLoading(false)
     setEmail('')
     setName('')
     setPhone('')
     onClose()
     toast.success('User Updated Successfully ', {
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


  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white  editer">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="user-form panel">
    <h4 className="subtitle is-3">Edit User</h4>
    <form onSubmit={ handleSubmit} >
      <div className="field-group">
        <div className="field">
            <label className="label">Name</label>
            <input className="input is-expanded" value={changedName} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="field">
            <label className="label">email</label>
            <input className="input is-expanded" type='email' value={changedEmail} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="field">
            <label className="label">phone</label>
            <input className="input is-expanded"  value={ChangedPhone} onChange={(e)=>setPhone(e.target.value)} />
        </div>
        <div className="field">
        <button className='button is-success label' >Save</button>
            
        </div>
      </div>
       

        
    </form>
    {isLoading && <Loader/>}
  </div>

          <div className="flex justify-end"></div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default EditUser;
