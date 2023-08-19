import {configureStore} from '@reduxjs/toolkit';
import { userReducer , addUser,setUsers,updateUser,deleteUser} from './userSlice';







const store = configureStore({
    reducer : {
       users : userReducer
    }
}) 

export {
    store,
    addUser,
    setUsers,
    updateUser,
    deleteUser
};





