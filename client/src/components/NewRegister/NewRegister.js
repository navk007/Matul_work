import  React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const defaultTheme = createTheme();
function NewRegister() {
    const navigate = useNavigate();

    const[data,setData]=useState({name:"",email:"",password:"",confirmPassword:"",});
    
    function changeHandler(e){
      setData((prev)=>({...prev,[e.target.name]:e.target.value}));
    //   console.log(data);
    }
    async function handleRegister (){
        try{
          const url='http://localhost:3001/api/v1/register';
          const res= await axios.post(url,data);
          navigate('/login')
          console.log(res);
        }
        catch(er){
          console.log(er);
          alert('error occured, make sure all the fields are filled correctly');
        }
      }
  
    return (
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box sx={{ mt: 1, width: '100%' }}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  autoComplete="name"
                  
                  onChange={(e)=>changeHandler(e)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e)=>changeHandler(e)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e)=>changeHandler(e)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirmPassword"
                  type="confirmPassword"
                  id="confirmPassword"
                  autoComplete="current-password"
                  onChange={(e)=>changeHandler(e)}
                />
                
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleRegister}
                >
                  Register
                </Button>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={()=>navigate('/login')}
                >
                  Log In
                </Button>
                
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>)
}

export default NewRegister