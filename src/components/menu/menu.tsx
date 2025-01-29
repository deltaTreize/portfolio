import React from "react";
import { NavLink } from "react-router-dom";
import projets from "../../Projets.json";
import "./menu.scss";

export function Menu() {
	return (
		<div className="menu-wrapper">
			<h2>PROJETS</h2>
			<ul className="menu">
				{projets.map((projet) => (
					<li key={projet.id} style={{border: `2px solid ${projet.color}`}}>
						<h3>{projet.name}</h3>
						<NavLink
							to={`/projets/${projet.name}`}
							style={{ backgroundImage: `url(${projet.pictureHome})` }}
						></NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}
