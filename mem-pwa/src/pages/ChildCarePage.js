import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer"

function CubiclePage() {
 return (
  <div className='homediv'>
      <Navbar />
	  <p>Information about the Child Care Page</p>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
      <Footer />
  </div>
 )
}

export default CubiclePage;
