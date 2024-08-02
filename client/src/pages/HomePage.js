import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="container-fluid">
      <h1>Home Page</h1>

      <p>Welcome to the Home Page</p>

      <p>Sign in or Create an Account</p>
      <div className="d-grid gap-2 d-md-block">
        <a className="btn btn-primary me-2" onClick={handleSignInClick}>Sign In</a>
        <a className="btn btn-primary" onClick={handleCreateAccountClick}>Create Account</a>
      </div>

    </div>
  );
};

export default HomePage;
