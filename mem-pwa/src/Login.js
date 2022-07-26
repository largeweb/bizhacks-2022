import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import HomeMenuAdmin from "./pages/HomeMenuAdmin"
import HomeMenuUser from "./pages/HomeMenuUser"
import Footer from "./components/Footer"
import {useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBFooter } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import { db } from "./firebase"

function Login() {

  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState(false)
  const [input, setInput] = useState(false)

  useEffect(() => {

  },[user]);

  return (
    <div class="homediv">
      <Navbar />
      {/* {isAdmin
        ? <HomeMenuAdmin />
        : <HomeMenuUser />
      } */}
      {/* ⚠️ TRY TO ADMIN PROTECT THIS BUTTON ⚠️ */}
      {/* It makes sense to */}
      <div className="switchdiv">
          <div>
            <p>🔴 Logged Out</p>
            <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='infosys ID'></input>
            <Link to={input}><button className={"switchButton"} onClick={(e) => setUser(e.target.value)}>Login to ID #{input}</button></Link>
          </div>
          <div>
            <p>🟢 Logged In</p>
            <button className={"switchButton"} onClick={(e) => setIsAdmin(true)}>Switch to Admin</button>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
