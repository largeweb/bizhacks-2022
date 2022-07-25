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
          {/* INCLUDE CHECK IN IN CHILD CARE PAGE */}
        </div>
        <div>
          {/* Scroll down list */}
          {/* Social cultural events, view flyers */}
          {/* Add a view participants */}
          <button className={"menuButton"}>Social Holidays</button>
          {/* Check Biz Hacks Notes */}
          <button className={"menuButton"}>Enable RDP Desktop</button>
        </div>
        <div>
          {/* <button className={"menuButton"}>View Participants</button> */}
          <button className={"menuButton"}>About this Web App</button>
        </div>
    </div>
  );
}

export default HomeMenuUser;