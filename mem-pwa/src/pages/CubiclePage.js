import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function CubiclePage() {
 return (
  <div className='homediv'>
      <Navbar />
	  <p>Information about the Cubicle Page</p>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
	  <p>Choose a Campus</p>
	  {/* PUT SEVERAL BUTTONS HERE, ONE FOR EACH CAMPUS */}
	  {/* PUT AN IMAGE HERE, GIVE IT A CLASS, SET DISPLAY TO NONE */}
	  {/* BUTTON ONCLICKS WILL SET THE SRC OF THE IMAGE TO BIRDS EYE VIEW & DISPLAY NEXT SET */}
	  {/* IE DISPLAY BUTTONS FOR EACH BUILDING */}
	  {/* ONCLICK OF BUILDING BUTTON, FLOOR DROPDOWN / BUTTONS APPEAR */}
	  {/* ONCLICK OF BUTTON BRINGS YOU TO FLOOR PLAN PAGE, SEPARATE PAGE */}


{/* THE SEPARATE PAGE, CALL IT FLOOR PLAN SELECT */}
{/* DISPLAY THE FLOOR PLAN IF AVAILABLE */}
{/* DISPLAY FOR USER ALL THE SINGLES OR DOUBLES IN THE FLOOR */}
{/* SINGLES AND DOUBLES ARE THEIR OWN COMPONENTS */}
{/* DOUBLES HAVE THE FUNCTIONALITY THAT ONLY ONE MAX CAN BE GREEN */}
{/* THEY ALL APPEAR ON THE SCREEN AS COMPONENTS, THE ADMIN SEES REMOVABLE */}
{/* THE ADMIN WILL SEE WHETHER THEY CAN BE REMOVED OR NOT (THRU PROPS) */}

      <Footer />
  </div>
 )
}

export default CubiclePage;
