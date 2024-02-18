
import "./navBar.scss";

export function Navbar() {
	return (
		<div className="navbar">
			<nav className="nav">
				<a href="#about">&Agrave; propos de moi</a>
				<a href="#">les technos</a>
				<a href="#">les projets</a>
			</nav>
      <div className="links">
      <a href="https://github.com/deltaTreize?tab=repositories" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a> 
      <a href="https://www.linkedin.com/in/ludovic-leblond-00433675/" target="_blank" rel="noreferrer"> <i className="fa-brands fa-linkedin"></i></a>
      <a href="https://www.instagram.com/ludovic.leblond.169/" target="_blank" rel="noreferrer"> <i className="fa-brands fa-instagram"></i></a>
      <a href="https://twitter.com/deltaTreize" target="_blank" rel="noreferrer"> <i className="fa-brands fa-twitter"></i></a>
      </div>
		</div>
	);
} 
