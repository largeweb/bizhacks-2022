import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import child1 from "../images/child1.jpeg"

function AboutPage() {
 return (
  <div className='homediv'>
    <Navbar />
    <div className='menuContainer aboutdiv'>
      <p>This is what our project is about</p>
      <p>This is what our project is about</p>
    </div>
	  <Link to="/app"><button className='menuButton'>Go Back Home</button></Link>
    <Footer />
  </div>
 )
}

export default AboutPage;