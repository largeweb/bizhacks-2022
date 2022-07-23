import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function HomeMenuUser() {
  return (
    <div className="menuContainer">
        <Router>
        <div>
          <Link to="/cubicle"><button className={"menuButton"}>Cubicle Manager</button></Link>
          <button className={"menuButton"}>Info</button>
        </div>
        <div>
          <button className={"menuButton"}>Test</button>
          <button className={"menuButton"}>Test</button>
        </div>
        </Router>
    </div>
  );
}

export default HomeMenuUser;