// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to the Home Page</h1>
        {/* Your content here */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
