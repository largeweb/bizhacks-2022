import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';

function HomeMenuUser() {
  return (
    <div className="menuContainer">
        <div>
          <button className={"menuButton"}>User</button>
          <button className={"menuButton"}>Info</button>
        </div>
        <div>
          <button className={"menuButton"}>Test</button>
          <button className={"menuButton"}>Test</button>
        </div>
    </div>
  );
}

export default HomeMenuUser;