import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import '../App.css';

function HomeMenuAdmin() {
  return (
    <div className="menuContainer" >
      <div>
        <button className={"menuButton"}>Admin</button>
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