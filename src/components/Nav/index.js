import React from "react";
import { Link } from "react-router-dom";
import NavMessage from "../NavMessage";
import "./Navbar.css";
// import './nav.css';


function Nav (props) {
  return (
    <header className="taskbar">
    <nav className="taskbar-navigation">
      {/* ------------  Logo ------------ */}
      <div className="taskbar-logo">
      <Link to="/"
      className={
        window.location.pathname === "/" || 
        window.location.pathname === "/clickygame" 
          ? "active" 
          : "nav-link"}
      >
        Clicky Game
      </Link>
      
      </div>

        {/* the nav-spacer div will help with positioning of navbar elements */}
      <div className="nav-spacer" />

      {/* ------------  Links  ------------ */}

      <div className="taskbar-nav-items">
        <ul>
        <NavMessage score={props.score} topScore={props.topScore}/>
          {/* ------------ Scores  ------------ */}
          <li>
          <div>
            Scores:{props.score}
            </div>
          </li>

          {/* ------------ Top Scores ------------ */}
          <li>
            <div>
            Top Scores:{props.topScore}
            </div>
          </li>
          
        </ul>
      </div>
    </nav>
   </header> 
    )
  }


export default Nav;
