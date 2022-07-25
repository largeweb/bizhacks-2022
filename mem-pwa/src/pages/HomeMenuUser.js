import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";

function HomeMenuUser() {
  return (
    <div className="menuContainer">
      <h1 className='menuHeader'>User Menu</h1>
        <div>
          <Link to="/cubicle"><button className={"menuButton"}>Cubicle Select</button></Link>
          <Link to="/childcare"><button className={"menuButton"}>Child Care</button></Link>
        </div>
        <div>
          <button className={"menuButton"}>Test</button>
          <button className={"menuButton"}>Test</button>
        </div>
    </div>
  );
}

export default HomeMenuUser;