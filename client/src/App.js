import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; //Used to direct to the home page
import CreateUser from './pages/CreateUser'; //Used to direct to the create user page
import SignIn from './pages/SignIn'; //Used to direct to the sign in page


const App = () => {
  console.log("Rendering App Component");

  return (
    
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path= "/createUser" element={<CreateUser />} />
        <Route exact path= "/signIn" element={<SignIn />} />
        
      </Routes>
  );
};

export default App;

