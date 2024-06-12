//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';


/**
 * 
 * function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

const App = () => {
  return (

    /**
     * You see the <Router> component from react-router-dom, 
     * In betweeen the <Router> component, you see the <Routes> component,
     * Inside the <Routes> component, you see the <Route> component.
     * You can specify the path and the component to render when the path matches.
     * 
     */
    <div className='App'>
      <h1>My React App</h1>

      {/* <Router>
        <Routes>

          <Route path="/" exact component={HomePage} />

        </Routes>
      </Router>*/}
      

    </div>

  );
};

export default App;

