import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

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
    <>
      <NavBar />
      <div class="container-fluid">

        <h1>Home Page</h1>

        <p>Welcome to the Home Page</p>

        <p>Sign in or Create an Account</p>
        <div class="d-grid gap-2 d-md-block">
          <a class="btn btn-primary me-2" onClick={handleSignInClick}>Sign In</a>
          <a class="btn btn-primary" onClick={handleCreateAccountClick}>Create Account</a>
        </div>

      </div>
    </>// This is a fragment, it's a way to group multiple children without adding extra nodes to the DOM
  );
};

export default HomePage;
