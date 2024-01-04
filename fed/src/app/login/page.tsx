"use client";

import { Box } from "@mui/material";
import React from "react";
import Login from "../components/Login";
import ProjAppBar from "../components/ProjAppBar";

const page = () => {
  return (
    <React.Fragment>
      <ProjAppBar></ProjAppBar>
      <Login></Login>
    </React.Fragment>
  );
};

export default page;