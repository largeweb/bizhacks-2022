import React from 'react';
import './App.css';
import Navbar from "./pages/Navbar"
import HomeMenu from "./pages/HomeMenu"
import Footer from "./pages/Footer"
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBFooter } from 'mdb-react-ui-kit';

function App() {
  return (
    <div>
      <Navbar />
      <HomeMenu />
      <Footer />
    </div>
  );
}

export default App;
