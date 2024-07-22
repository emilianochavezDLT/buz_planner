const HomePage = () => {
  console.log("Rendering HomePage Component"); // Debugging statement

  return (
    <div className="container-fluid">
      <h1>Home Page</h1>

      <p>Welcome to the Home Page</p>

      <p>Sign in or Create an Account</p>
      <div className="d-grid gap-2 d-md-block">
        <a className="btn btn-primary me-2">Sign In</a>
        <a className="btn btn-primary">Create Account</a>
      </div>

    </div>
  );
};

export default HomePage;
