import * as React from "react";

import "./projetVisual.scss";

export interface props {
	title: string;
	imageAdresse: string;
	imageAlt: string;
	linkInternet: string;
	linkGitHub: string;
}

function ProjetVisual(props: props) {
	return (
		<div className="container-visual" key={props.title}>
			<h3>{props.title}</h3>
			<img src={props.imageAdresse} alt={props.imageAlt} />

			<div className="linkInternet">
				<i className="fa-solid fa-globe"></i>
				<a href={props.linkInternet} className="site">
					visiter le site
				</a>
			</div>

			<div className="linkGithub">
				<i className="fa-brands fa-github"></i>
				<a href={props.linkGitHub} className="github">
					voir le code
				</a>
			</div>
		</div>
	);
}

export default ProjetVisual;
