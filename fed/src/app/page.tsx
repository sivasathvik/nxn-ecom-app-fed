import Image from 'next/image'
import styles from './page.module.css'
import React from "react"
import theme from "./theme"
import {Button,TextField,Box,Typography,Link,AppBar,Toolbar,IconButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
//import Link from "next/link"
import {ThemeProvider,createTheme} from "@mui/material/styles"

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Box p={2}>
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <TextField id="outlined-basic" label="For demo use:admin@example.com" variant="outlined">

        </TextField>
        This is where everything starts
        
        <Link href="#" underline="hover">
        {'Register'}
        </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#203040' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,color: '#FFFFFF' }}>
            zonama
          </Typography>
          <Button color="inherit" style={{ color: '#FFFFFF' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </React.Fragment>

    </ThemeProvider>
  )
}
