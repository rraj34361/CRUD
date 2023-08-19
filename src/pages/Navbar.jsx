 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
 
import { useNavigate } from 'react-router-dom';
import '../index.css'
export default function Navbar() {
  const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar variant="dense">
 
          <Typography onClick={()=>navigate('/')} sx={{flexGrow:1, textAlign:'start', cursor : "pointer"}} variant="h6" color="inherit" component="div">
      
          <button className='button is-info'> Users List</button>
         
          </Typography>
          <Typography   sx={{flexGrow:1, textAlign:'center', cursor : "pointer"}} variant="h6" color="inherit" component="div">
              
            <h1 className='heading'>USER CRUD OPERATION</h1>
         
          </Typography>
          <Typography onClick={()=>navigate('/create')} sx={{flexGrow:1, textAlign:'end', cursor : "pointer"}} variant="h6" color="inherit" component="div">
     
          <button className='button is-primary'> Create</button>
         
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}