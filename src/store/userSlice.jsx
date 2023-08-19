import {createSlice, nanoid} from '@reduxjs/toolkit'


const userSlice =  createSlice({
    name : "users",
    initialState : [],
    reducers : {
       addUser(state,action){
        action.payload.id = nanoid()
          state.push(action.payload)
       },
       setUsers(state,action){
       
         return action.payload
  
       },
       updateUser(state,action){
          
 
       let index ;
       state.forEach((user,i)=>{
           if(user.id == action.payload.id){
      index = i
           }
       })
    
            state[index] = action.payload
       },
       deleteUser(state,action){
       
          let updatedUser = state.filter(user=>{
             
            return user.id !=action.payload
          })
                
          return updatedUser
       }
    }
})


export const {addUser,setUsers,updateUser,deleteUser} = userSlice.actions
export const userReducer = userSlice.reducer