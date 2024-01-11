import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
//import ProjAppBar from "./ProjAppBar";
//import { Login } from "@mui/icons-material";
import {useFormik} from "formik";
import * as Yup from 'yup';
import axios from 'axios';
//import * as cookie from 'cookie-cutter'
import { useRouter } from 'next/navigation'
import {UseGlobalContext} from "../contexts/GlobalContext"

const Login = () => {

  const [result,setResult]=React.useState<string>("");
  const [error,setError]=React.useState<string>("");
  const {setUsername,setAccessToken}=UseGlobalContext();
  const router = useRouter();
  var cookie = require('cookie-cutter');
  const login= async(user : any) => {
   // console.log(`Login function called with ${JSON.stringify(values)} `);
   const url='http://localhost:3001/login'
    try{
      const response=await axios.post(url,user)
      console.log(`${JSON.stringify(response.data)}`);
      //setResult(response.data.result); this prints token on login page but now i am storing in cookies so i dont need this anymore to be displayed
      setResult("Login successful");
      cookie.set("access token",response.data.token);
      setAccessToken(response.data.token);
      setUsername(response.data.username);
      router.push('/');
      setError("");

    } catch (error){
      if (axios.isAxiosError(error)) {
        setError(error.message)//server side error state managment we are storing
        setResult("");
        console.log(error);
      } else {
        console.log(error);
      }
    }
    

  }
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: Yup.object({
          email: Yup.string().email('Invalid email address').required('Email is Required'),
          password:Yup.string().min(6,"Must be atleast 6 characters long").required("Password is required"),
        }),
        onSubmit: async (values) => {
          //setTimeout( () => {alert(JSON.stringify(values, null, 2));} ,5000);
          //alert(JSON.stringify(values, null, 2));
          await login(values);
        },
      });
  return (
    <React.Fragment>
    <form onSubmit={formik.handleSubmit}>
    <Container>
        <Grid container spacing={2} pt={2} px={25}>
          <Grid item xs={12}>
            <Typography variant="h4">Login</Typography>
          </Grid>
          {result && <Grid item xs={12} color={"green"}>
          <Typography variant="h6">{result}</Typography>
          </Grid>}
          {error && <Grid item xs={12} color={"red"}>
          <Typography variant="h6">{error}</Typography>
          </Grid>}
          <Grid item xs={12}>
            <TextField fullWidth id="email" name="email" label="Email" variant="outlined" value={formik.values.email} onChange={formik.handleChange} error={Boolean(formik.errors.email)} helperText={formik.errors.email}  />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="password" name="password" label="Password" type='password' variant="outlined" value={formik.values.password} onChange={formik.handleChange} error={Boolean(formik.errors.password)} helperText={formik.errors.password}   />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth type='submit' disabled={!formik.isValid || formik.isSubmitting}>
              Login
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} pt={2} px={25}>
          <Grid item xs={2.75}>
            <Typography>Dont have an account?</Typography>
          </Grid>
          <Grid item xs={6}>
            <Link href="/register" underline="hover">
              {"Register"}
            </Link>
          </Grid>
        </Grid>
      </Container>

    </form>
    </React.Fragment>
  );
};

export default Login;