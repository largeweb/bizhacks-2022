import React from 'react';
import './App.css';
import Navbar from "./pages/Navbar"
import HomeMenuAdmin from "./pages/HomeMenuAdmin"
import HomeMenuUser from "./pages/HomeMenuUser"
import Footer from "./pages/Footer"
import {useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBFooter } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";

function App() {

  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div>
      <Navbar />
      {isAdmin
        ? <HomeMenuAdmin />
        : <HomeMenuUser />
      }
      {isAdmin
        ? <button className={"switchButton"} onClick={(e) => setIsAdmin(false)}>Switch to User</button>
        : <button className={"switchButton"} onClick={(e) => setIsAdmin(true)}>Switch to Admin</button>
      }
      <Footer />
    </div>
  );
}

export default App;
