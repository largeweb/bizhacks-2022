import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';

function HomeMenuUser() {
  return (
    <div>
        <div className="menuContainer">
          <button className={"menuButton"}>User</button>
          <button className={"menuButton"}>Info</button>
        </div>
        <div className="menuContainer">
          <button className={"menuButton"}>Test</button>
          <button className={"menuButton"}>Test</button>
        </div>
    </div>
  );
}

export default HomeMenuUser;