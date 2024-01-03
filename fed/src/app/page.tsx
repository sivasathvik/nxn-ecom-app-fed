import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { AppBar, Box, Button, IconButton, Link, TextField, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// import Link from "next/link";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import theme from "./theme";

export default function Home() {
  return (
    <React.Fragment>
      <Box p={2}>
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <TextField id="outlined-basic" label="For demo use: admin@example.com " variant="outlined" />
        This is where everything starts!
        <Link href="/register" underline="hover">
          {"Register"}
        </Link>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#203040' }}>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 ,color: '#FFFFFF' }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,color: '#FFFFFF' }}>
              Zonama
            </Typography>
            <Button color="inherit" sx={{ color: "#FFFFFF" }} >Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}