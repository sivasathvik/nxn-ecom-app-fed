"use client";

import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { UseGlobalContext } from "../contexts/GlobalContext";

const ProjAppBar = () => {
  const { username } = UseGlobalContext();
 //const [username,setUsername]=React.useState<string>("");

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#203040' }}>
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 ,color: '#FFFFFF'}}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,color: '#FFFFFF' }}>
              Zonama
            </Typography>
            <Button variant="text" startIcon={<ShoppingCartOutlinedIcon />} sx={{ color: "#FFFFFF" }}>
              Cart
            </Button>
            <Box px={1.5}></Box>
            <Button variant="text" startIcon={<PersonOutlineOutlinedIcon />} sx={{ color: "#FFFFFF" }}>
              {username!="" ? username : "Login"}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default ProjAppBar;