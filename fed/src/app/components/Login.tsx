import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
//import ProjAppBar from "./ProjAppBar";
//import { Login } from "@mui/icons-material";
import {useFormik} from "formik";
import * as Yup from 'yup';

const Login = () => {
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
          alert(JSON.stringify(values, null, 2));
          //await register(values);
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
          <Grid item xs={12}>
            <TextField fullWidth id="email" name="email" label="Email" variant="outlined" value={formik.values.email} onChange={formik.handleChange} error={Boolean(formik.errors.email)} helperText={formik.errors.email}  />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="password" name="password" label="Password" variant="outlined" value={formik.values.password} onChange={formik.handleChange} error={Boolean(formik.errors.password)} helperText={formik.errors.password}   />
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