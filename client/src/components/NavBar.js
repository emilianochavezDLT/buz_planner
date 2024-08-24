import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

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
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Buzz Planner
            </Typography>
            <Button color="inherit" onClick={handleSignInClick} sx={{
                
            }}>Login</Button>
            <Button color="inherit" onClick={handleCreateAccountClick}>Sign Up</Button>
          </Toolbar>
        </AppBar>
      </Box>
        
    );

};

export default NavBar;