"use client";
import * as React from "react";

type Props = {
    children: React.ReactNode;
};

export type GlobalContextType = {
    username:string;
    accessToken:string;
    setAccessToken: (token : string) => void;
    setUsername: (username: string) => void;

    
  }; //Defining context type

const globalValues:GlobalContextType= {
    username:"",
    accessToken:"",
    setAccessToken: (token:string) => {},
    setUsername: (username:string) => {}
};

export const GlobalContext = React.createContext<GlobalContextType>(globalValues); //creating context of that type
function UseGlobalContext() {
    return React.useContext(GlobalContext)
} //i am using context hook directly here instead of doing in fed login page and exporting it as a function
// Below is context provider function to pass username into this global context
const GlobalContextProvider = ({ children } : Props) => {
    //Below we say that username is intilased with empty string
    const [username,setLocalUsername]=React.useState<string>('') ; 
    const [accessToken,setLocalAccessToken]=React.useState<string>('') ;
    //Using a state for username to set and for setting username we are writing a function not to overide we wrote one as setLocalUsername
    //This function gives the required username into setUsername now thats why username means empty string and setUsername means the username required after this function
    //At the last we return both because if username is an empty string then setUsername function will not work and then username which is already intilaised as empty string comes into play
    const setUsername=async(username:string) => {
        setLocalUsername(username);

    };

    const setAccessToken=async(token:string) => {
        setLocalAccessToken(token);
    };
    //We are returning both username and set username 
    return <GlobalContext.Provider value={{ username,setUsername,accessToken,setAccessToken }}>{children}</GlobalContext.Provider>;
};

export  {GlobalContextProvider,UseGlobalContext};