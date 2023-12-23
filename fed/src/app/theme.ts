'use client';
import {createTheme} from "@mui/material/styles"
import {red} from "@mui/material/colors";

//Create a theme instance
const theme = createTheme({
    palette: {
        primary: {
          //main:"#556cd6"
            main: "#b5a63f",

        },
        secondary: {
          main: "#f50057"
        },
       // error: {
         // main:red.A400
        //},
        //background: {
          //default: "#F6F6F6",
       // },
      },
      typography: {
      //   //Use system font
      fontFamily:
      //   //apple system
         '"Inter","Open Sans",Roboto,"Helvetica Neue",Arial,sans-serif',
      //   //fontFamily:"inter"
    },
      // components: {
      //   //MuiButton: {
      //     //styleOverirdes: {
      //      // root: {
      //         //blockSize : "3.5rem",
      //         //fontSize: "1.125rem",
      //       //},

      //    // }
      //   }
     // }
    
});
export default theme;
