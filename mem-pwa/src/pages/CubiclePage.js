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
  <div>
      <Navbar />
	  <p>Information about the Cubicle Page</p>
      <Footer />
  </div>
 )
}

export default CubiclePage;
