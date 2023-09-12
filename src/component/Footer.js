// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul>
            <li>Tejas garg
            </li>
            <li>Vaibhav Malhotra
            </li>
        </ul>
        <ul>
            <li>Rohan Babbar
            </li>
            <li>Yakshit Khurrana
            </li>
        </ul>
        <ul>
            <li>Shraddha Seth
            </li>
            <li>Adit Arora
            </li>
        </ul>
      </div>
      <div className="rights">
        &copy; {new Date().getFullYear()} Your E-Portal Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
