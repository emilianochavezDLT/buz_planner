import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import styled from "@mui/material/styles/styled";



const StyledToolbar = styled(Toolbar)({
  backgroundColor: "#333333",
  display: "flex",
  justifyContent: "space-between"
});


const StyledButton = styled(Button)({
  color: "white"

});

const NavBar = () => {

  const navigate = useNavigate();
  const handleCreateAccountClick = () => {
    navigate("/createUser");
  };
  const handleSignInClick = () => {
    navigate("/signIn");
  };



  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <StyledToolbar>
          <Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="white">
              Buzz Planner
            </Typography>
          </Button>
          <StyledButton>
            <Button color="inherit" onClick={handleCreateAccountClick}>Sign Up</Button>
            <Button color="inherit" onClick={handleSignInClick} sx={{
              mr: "10px"
            }}>Login</Button>
          </StyledButton>
        </StyledToolbar>
      </AppBar>
    </Box>

  );

};

export default NavBar;