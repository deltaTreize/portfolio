
import React from "react";
import "./navBar.scss";

export function Navbar() {
	return (
		<div className="navbar">
      <nav className="links">
      <a href="https://github.com/deltaTreize?tab=repositories" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a> 
      <a href="https://www.linkedin.com/in/ludovic-leblond-00433675/" target="_blank" rel="noreferrer"> <i className="fa-brands fa-linkedin"></i></a>
      <a href="https://twitter.com/deltaTreize" target="_blank" rel="noreferrer"> <i className="fa-brands fa-twitter"></i></a>
      </nav>
		</div>
	);
} 
