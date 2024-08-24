import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import {Box, Container} from "@mui/material";




const HomePage = () => {

  const navigate = useNavigate();
  console.log(navigate);

  const handleCreateAccountClick = () => {
    navigate("/createUser");
  };

  const handleSignInClick = () => {
    navigate("/signIn");
  };

  return (
    <Box>
      <NavBar />
      <Container >
        
      </Container>
    </Box>

  );
};

export default HomePage;
