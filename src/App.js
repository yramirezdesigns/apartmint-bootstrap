import React from "react";
import logo from "./ApartmintLogoSmall.png";
import "./App.css";
// import { Button, ButtonToolbar, ButtonGroup, Image } from "react-bootstrap";
// import backDrop from "./assets/bg-1.jpg";
// import Modal from "./components/Modal";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
      </header>
    </div>
  );
}

export default App;
