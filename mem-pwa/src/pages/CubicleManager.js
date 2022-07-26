import { Button } from 'bootstrap';
import React from 'react';
import "react-bootstrap"
import { Container } from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";
import { collection , onSnapshot, serverTimestamp, addDoc } from 'firebase/firestore';
import { db } from "../firebase"
import {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Campus from "../components/Campus"

function CubicleManager() {
	const [seats, setSeats] = useState([''])
	const [floors, setFloors] = useState([''])
	const [buildings, setBuildings] = useState([''])
	const [campuses, setCampuses] = useState([''])
	const [input, setInput] = useState('nothing')
	const [selectedCampus, setSelectedCampus] = useState('')
	const [selectedBuilding, setSelectedBuilding] = useState('')
	const [selectedFloor, setSelectedFloor] = useState('')
	const [selectedSeat, setSelectedSeat] = useState('')

  useEffect(() => {
    onSnapshot(collection(db,'seats'),(snapshot)=>{
      setSeats(snapshot.docs.map(doc => doc.data()))
    })
  },[input]);
  const addSeat=(e)=>{
	console.log("Adding seat")
	console.log(input)
    e.preventDefault();
	addDoc(collection(db,'seats'),{
	   seat: String(input),
	   timestamp: serverTimestamp()
	})
    // setSeats([...seats,input]);
    setInput('')
	console.log(input)
  };
  const addFloor=(e)=>{
	console.log("Adding Floor")
	console.log(input)
    e.preventDefault();
	addDoc(collection(db,'floors'),{
	   floor:input,
	   timestamp: serverTimestamp()
	})
    // setSeats([...seats,input]);
    setInput('')
	console.log(input)
  };

  const addBuilding=(e)=>{
// 	console.log("Adding building")
// 	console.log(input)
//     e.preventDefault();
// 	// UPDATE CAMPUS TO HAVE
// 	// addDoc(collection(db,'campuses'),{
// 	// 	  .${campusName}.${buildingName}:
// 	// })
// 	// addDoc(collection(db,'campuses'),{
// 	// 	.${campusName}.${buildingName}: {nameinput}
// 	// })
//     // setSeats([...seats,input]);
//     setInput('')
	console.log(input)
  };

  const addCampus=(e)=>{
	console.log("Adding campus")
	console.log(input)
    e.preventDefault();
	// setInput('newboyy')
	console.log("GOING WITH: " + String(input))
	// let campusName = input;
	addDoc(collection(db,'campuses'),{
		name: String(input),
		timestamp: serverTimestamp()
	})
    // setSeats([...seats,input]);
    setInput('')
	console.log(input)
  };
 return (
  <div className='homediv'>
      <Navbar />
	  <p>Information about the Cubicle Manager</p>
	  <Link to="/appadmin"><button className='menuButton'>Go Back Home</button></Link>
	  <br></br>
		<button onClick={(e) => addCampus(e)}>Add Campus</button>
		<button onClick={(e) => addBuilding(e)}>Add Building</button>
		<button onClick={(e) => addFloor(e)}>Add Floor</button>
		<button onClick={(e) => addSeat(e)}>Add Seat</button>
		{/* <button variant="contained" onClick={addSeat}>Add Seat</button> */}
		 <h1>CAMPUSES</h1>
			<ul>
			{campuses.map(({campus}) => <Campus /*campus={campus}*/ className='menuButton' />)}
			</ul>
		 <h1>BUILDINGS</h1>
			<ul>
			{buildings.map(({building})=> <div /*seat={seat}*/className='menuButton' />)}
			</ul>
		 <h1>FLOORS</h1>
			<ul>
			{floors.map(({floor})=> <div /*seat={seat}*/className='menuButton' />)}
			</ul>
		 <h1>SEATS</h1>
			<ul>
			{seats.map(({seat})=> <div /*seat={seat}*/className='menuButton' />)}
			</ul>
      <Footer />
	  {/* PUT SEVERAL BUTTONS HERE, ONE FOR EACH CAMPUS, AND AN ADD BUTTON */}
	  {/* PUT AN IMAGE HERE, GIVE IT A CLASS, SET DISPLAY TO NONE */}
	  {/* BUTTON ONCLICKS WILL SET THE SRC OF THE IMAGE TO BIRDS EYE VIEW & DISPLAY NEXT SET */}
	  {/* INCLUDE BUTTON FOR ADMIN TO UPDATE CAMPUS IMAGE */}
	  {/* IE DISPLAY BUTTONS FOR EACH BUILDING */}
	  {/* INCLUDE BUTTON FOR ADMIN TO UPDATE BUILDINGS/IMAGE */}
	  {/* ONCLICK OF BUILDING BUTTON, BRING YOU TO FLOOR */}
	  {/* INCLUDE BUTTON FOR ADMIN TO UPDATE FLOORS OF BUILDING */}
	  {/* ONCLICK OF BUTTON BRINGS YOU TO FLOOR PLAN PAGE, SEPARATE PAGE */}

{/* THE SEPARATE PAGE, CALL IT FLOOR PLAN PAGE */}
{/* DISPLAY THE FLOOR PLAN IF AVAILABLE, ALLOW ADMIN TO REMOVE IT (THRU PROPS) */}
{/* DISPLAY FOR ADMIN BUTTONS TO ADD NEW SINGLE OR DOUBLE */}
{/* SINGLES AND DOUBLES ARE THEIR OWN COMPONENTS */}
{/* DOUBLES HAVE THE FUNCTIONALITY THAT ONLY ONE MAX CAN BE GREEN */}
{/* THEY ALL APPEAR ON THE SCREEN AS COMPONENTS, THE ADMIN SEES REMOVABLE */}
{/* THE ADMIN WILL SEE WHETHER THEY CAN BE REMOVED OR NOT (THRU PROPS) */}

  </div>
 )
}

export default CubicleManager;
