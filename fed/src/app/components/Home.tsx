"use client"
import React from 'react';
import {UseGlobalContext} from "../contexts/GlobalContext"
import {Box,Container} from "@mui/material"

const HomeComponent = () => {
    const {accessToken}=UseGlobalContext();
    //Here no need of setting access token we already set that in login page this is just to display so here set accesstoken is not required
     return (
        <React.Fragment>
            <Container>
            {accessToken!="" && 
            <Box>User logged in! here is the access token ${accessToken}</Box>
            }
            {accessToken==="" &&
            <Box>User is not logged in</Box>
            }
            </Container>
        </React.Fragment>

     );
};
export default HomeComponent;