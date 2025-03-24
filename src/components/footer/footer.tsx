
import React from "react";
import "./footer.scss";

export function Footer() {
	return (
		<div className="footer">
      <div className="links">
      <a href="https://github.com/deltaTreize?tab=repositories" target="_blank" rel="noreferrer" aria-label="liens vers compte gitHub"><i className="fa-brands fa-github"></i></a> 
      <a href="https://www.linkedin.com/in/ludovic-leblond-00433675/" target="_blank" rel="noreferrer" aria-label="liens vers compte linkedIn"> <i className="fa-brands fa-linkedin"></i></a>
      <a href="https://www.facebook.com/profile.php?id=61570406710615" target="_blank" rel="noreferrer" aria-label="liens vers page facebook"> <i className="fa-brands fa-facebook"></i></a>
      <a href="https://www.instagram.com/leblond_ludovic_dev_web/" target="_blank" rel="noreferrer" aria-label="liens vers compte instagram"> <i className="fa-brands fa-instagram"></i></a>
      <a href="mailto: ludo.leblond13@gmail.com" aria-label="liens vers messagerie"><i className="fa-solid fa-envelope" style={{color: "#ffffff"}}></i></a>
      </div>
		</div>
	);
} 
