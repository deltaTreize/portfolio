
import React from "react";
import "./footer.scss";

export function Footer() {
	return (
		<div className="footer">
      <nav className="links">
      <a href="https://github.com/deltaTreize?tab=repositories" target="_blank" rel="noreferrer" aria-label="liens vers compte gitHub"><i className="fa-brands fa-github"></i></a> 
      <a href="https://www.linkedin.com/in/ludovic-leblond-00433675/" target="_blank" rel="noreferrer" aria-label="liens vers compte linkedIn"> <i className="fa-brands fa-linkedin"></i></a>
      <a href="https://twitter.com/deltaTreize" target="_blank" rel="noreferrer" aria-label="liens vers compte twitter"> <i className="fa-brands fa-twitter"></i></a>
      <a href="mailto: ludo.leblond13@gmail.com" aria-label="liens vers messagerie"><i className="fa-solid fa-envelope" style={{color: "#ffffff"}}></i></a>
      </nav>
		</div>
	);
} 
