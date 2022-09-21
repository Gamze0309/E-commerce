import React, { useEffect } from 'react';
 import { useFormik } from 'formik';
 import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getSingleUser } from '../Services/GetSingleUser';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../Redux/store';
import {useNavigate} from 'react-router-dom';

 const validate = (values: any) => {
   const errors = {username: '', password: ''};

   if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

   if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less';
  }
 
   return errors;
 };

 const theme = createTheme();

 const LoginComponent = () => {

  const navigate = useNavigate()

  const userStatus = useSelector((state: RootState) => state.getUser.status)

  const dispatch: AppDispatch = useDispatch()

   useEffect(()=>{
    console.log(userStatus)
    if(userStatus === "Success"){
      navigate('/home')
    }
   },[userStatus])

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleClick = () => {
    dispatch(getSingleUser(formik.values.username, formik.values.password))
    console.log('başta')
   }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={formik.handleSubmit} style={{position:'relative'}}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="Username"
              type="text"
              id="username"
              autoComplete="off"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username ? <label style={{width:'100%'}}>{formik.errors.username}</label> : <></>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? <label style={{width:'100%'}}>{formik.errors.password}</label> : <></>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleClick}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
   );
 };

 export default LoginComponent