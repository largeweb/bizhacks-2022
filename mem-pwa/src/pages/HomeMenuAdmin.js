import { Button } from 'bootstrap';
import {Link} from "react-router-dom";
import React from 'react';
import "react-bootstrap"
import '../App.css';

function HomeMenuAdmin() {
  return (
    <div className="menuContainer" >
      <div>
          <Link to="/cubiclemanager"><button className={"menuButton"}>Cubicle Manager</button></Link>
        <button className={"menuButton"}>Control 😎</button>
      </div>
      <div>
        <button className={"menuButton"}>Test</button>
        <button className={"menuButton"}>Test</button>
      </div>
    </div>
  );
}

export default HomeMenuAdmin;