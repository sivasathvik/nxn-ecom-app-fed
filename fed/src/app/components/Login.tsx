import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
//import ProjAppBar from "./ProjAppBar";
//import { Login } from "@mui/icons-material";

const Login = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2} pt={2} px={25}>
          <Grid item xs={12}>
            <Typography variant="h4">Login</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth>
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
    </React.Fragment>
  );
};

export default Login;