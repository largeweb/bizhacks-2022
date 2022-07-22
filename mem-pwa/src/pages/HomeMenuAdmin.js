import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import '../App.css';

function HomeMenuAdmin() {
  return (
    <div>
        <div className='menuContainer'>
        <button>Admin</button>
        <button>Control 😎</button>
      </div>
      <div>
        <button>Test</button>
        <button>Test</button>
      </div>
    </div>
  );
}

export default HomeMenuAdmin;