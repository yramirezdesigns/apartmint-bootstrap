import React from "react";
import logo from "./ApartmintLogoSmall.png";
import "./App.css";
// import { Button, ButtonToolbar, ButtonGroup, Image } from "react-bootstrap";
// import backDrop from "./assets/bg-1.jpg";
// import Modal from "./components/Modal";
import Login from "./components/Login";
// import { Button, ButtonToolbar, ButtonGroup, Image } from "react-bootstrap";
// import backDrop from "./assets/bg-1.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
        {/*// /!* <Image className="backDrop" alt="Background" src={backDrop} fluid /> *!/*/}
        {/*// /!* <img className="backDrop" alt="Background" src={backDrop} /> *!/*/}
        {/*// <ButtonToolbar>*/}
        {/*//   <ButtonGroup className="mr-2" aria-label="First group">*/}
        {/*//     <Button variant="info" className="loginBut">*/}
        {/*//       Login*/}
        {/*//     </Button>*/}
        {/*//   </ButtonGroup>*/}
        {/*//   <ButtonGroup className="mr-2" aria-label="First group">*/}
        {/*//     <Button variant="info" className="registerBut">*/}
        {/*//       Register*/}
        {/*//     </Button>*/}
        {/*//   </ButtonGroup>*/}
        {/*// </ButtonToolbar>*/}
        {/*// /!* <p>*/}
        {/*//   Edit <code>src/App.js</code> and save to reload.*/}
        {/*// </p> *!/*/}
        {/*// /!* <a*/}
        {/*//   className="App-link"*/}
        {/*//   href="https://reactjs.org"*/}
        {/*//   target="_blank"*/}
        {/*//   rel="noopener noreferrer"*/}
        {/*// >*/}
        {/*//   Learn React*/}
        {/*// </a> *!/*/}
      </header>
    </div>
  );
}

export default App;
