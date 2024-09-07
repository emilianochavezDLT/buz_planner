import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import {Box, Container, Typography} from "@mui/material";
import styled from "@mui/material/styles/styled";
import Button from "@mui/material/Button";


const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  textAlign: "left",
  padding: "20px"
});


const HomePage = () => {

  const navigate = useNavigate();
  console.log(navigate);

  const handleCreateAccountClick = () => {
    navigate("/createUser");
  };

  const handleLogInClick = () => {
    navigate("/logIn");
  };

  return (
    <Box>
      <NavBar />
      <CenteredContainer >
        <Typography variant="h3">Welcome to Buzz Planner</Typography>
        <Typography variant="h5">A Great Way to Plan Your Day</Typography>
        <Box>
          <Typography variant="h6">Sign up to get started</Typography>
        <Button variant="contained" onClick={handleCreateAccountClick}>Sign Up</Button>
        <Button sx={{
          ml: "10px"
        }} variant="contained" onClick={handleLogInClick}>Login</Button>        
        </Box>
      </CenteredContainer>
    </Box>

  );
};

export default HomePage;
