import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer"
import child1 from "../images/child1.jpeg"

function CubiclePage() {
 return (
  <div className='homediv'>
      <Navbar />
      <div className='childcareTopDiv'>
        <p>Decide if Infosys Child Care is Right for You</p>
      </div>
      <img className='childcareimage' src={child1}></img>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
      <Footer />
  </div>
 )
}

export default CubiclePage;
