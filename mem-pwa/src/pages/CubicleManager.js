import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function CubicleManager() {
 return (
  <div className='homediv'>
      <Navbar />
	  <p>Information about the Cubicle Manager</p>
	  <Link to="/"><button className='menuButton'>Go Back Home</button></Link>
      <Footer />
	  {/* PUT SEVERAL BUTTONS HERE, ONE FOR EACH CAMPUS, AND AN ADD BUTTON */}
	  {/* PUT AN IMAGE HERE, GIVE IT A CLASS, SET DISPLAY TO NONE */}
	  {/* BUTTON ONCLICKS WILL SET THE SRC OF THE IMAGE TO BIRDS EYE VIEW & DISPLAY NEXT SET */}
	  {/* INCLUDE BUTTON FOR ADMIN TO UPDATE CAMPUS IMAGE */}
	  {/* IE DISPLAY BUTTONS FOR EACH BUILDING */}
	  {/* INCLUDE BUTTON FOR ADMIN TO UPDATE BUILDINGS/IMAGE */}
	  {/* ONCLICK OF BUILDING BUTTON, BRING YOU TO FLOOR */}
	  {/* INCLUDE BUTTON FOR ADMIN TO UPDATE FLOORS OF BUILDING */}
	  {/* ONCLICK OF BUTTON BRINGS YOU TO FLOOR PLAN PAGE, SEPARATE PAGE */}

{/* THE SEPARATE PAGE, CALL IT FLOOR PLAN PAGE */}
{/* DISPLAY THE FLOOR PLAN IF AVAILABLE, ALLOW ADMIN TO REMOVE IT (THRU PROPS) */}
{/* DISPLAY FOR ADMIN BUTTONS TO ADD NEW SINGLE OR DOUBLE */}
{/* SINGLES AND DOUBLES ARE THEIR OWN COMPONENTS */}
{/* DOUBLES HAVE THE FUNCTIONALITY THAT ONLY ONE MAX CAN BE GREEN */}
{/* THEY ALL APPEAR ON THE SCREEN AS COMPONENTS, THE ADMIN SEES REMOVABLE */}
{/* THE ADMIN WILL SEE WHETHER THEY CAN BE REMOVED OR NOT (THRU PROPS) */}

  </div>
 )
}

export default CubicleManager;
