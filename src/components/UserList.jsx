/* eslint-disable react/prop-types */

import ShowUser from './ShowUser';
import { useSelector } from 'react-redux';
import '../index.css'
import Loader from '../pages/Loader';

 
const UserList = ({isLoading}) => {
 
 const users = useSelector(state=>state.users)
 

  return (
    <div className='edit_it'>
    <h4 className="subtitle is-3">User List: <br /> No.of Persons :- {users.length} </h4>
    <div className={`panel show bold`}>
    
         
        </div>

   {users?.map(user=>(
    <ShowUser key={user.id} name={user.name} email={user.email} phone={user.phone} id = {user.id}/>
   ))}
      {isLoading && <Loader/>}
    </div>
  );
};

export default UserList;
