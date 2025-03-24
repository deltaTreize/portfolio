import React from "react";
import "./about.scss";

export function About() {
	return (
		<div className="about" id="about">
			<div className="entete">
				<h2>A propos de moi</h2>
				<img src="./assets/moi.webp" alt="moi" />
			</div>
			<h3>
			Développeur et intégrateur web passionné, diplômé de l'école OpenClassrooms en août 2024.<br></br><br></br> Je conçois des sites modernes, accessibles et performants, tout en mettant l'accent sur l'expérience utilisateur.<br></br><br></br> Mon objectif est de transformer des idées en expériences web uniques, en alliant esthétique et fonctionnalité.
			</h3>
		</div>
	);
}
