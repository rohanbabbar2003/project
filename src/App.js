// src/App.js
import React from 'react';
import './App.css';
import Explore from './component/Explore';
import LandingPage from './component/LandingPage';
import LoginPage from './component/LoginPage';
import Navbar from './component/Navbar';
import Footer from './component/Footer'; // Import the Footer component
import SignUp from './component/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/home" element={<LandingPage />}></Route>
          {/* <Route exact path="/about" element={}></Route> */}
          <Route exact path="/LoginPage" element={<LoginPage />}></Route>
          <Route exact path="/LoginPage/SignUp" element={<SignUp />}></Route>
        </Routes>
      </Router>
      <Footer /> {/* Include the Footer component here */}
    </>
  );
}

export default App;
