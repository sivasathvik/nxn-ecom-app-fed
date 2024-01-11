import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const Page = () => {
  const appBarStyle = {
    backgroundColor: '#3FB5B5',
    marginBottom: '10px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    marginTop: '-20px', // Adjust the marginTop to move the list up
  };

  const listStyle = {
    py: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    backgroundColor: 'background.paper',
  };

  const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={appBarStyle}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Order Summary
            </Typography>
            <Button color="inherit">Return to cart</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Container sx={containerStyle}>
        <Grid container spacing={2}>
          <List sx={listStyle}>
            <ListItem sx={listItemStyle}>
              <ListItemText primary="Product detail" />
              <ListItemText primary="Quantity" />
              <ListItemText primary="Price" />
            </ListItem>

            {/* Example Data Rows */}
            <ListItem sx={listItemStyle}>
              <ListItemText primary="Nike shoes" />
              <ListItemText primary="1" />
              <ListItemText primary="500$" />
            </ListItem>
          </List>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Page;


