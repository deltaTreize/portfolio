import React from "react";
import { About } from "../../components/about/about.tsx";
import { Menu } from "../../components/menu/menu.tsx";
import { Technos } from "../../components/technos/technos.tsx";
import "./acceuil.scss";

export function Acceuil() {
	return (
		<div className="acceuil">
			<h1>LEBLOND Ludovic</h1>
			<Menu />
			<About />
			<Technos />
		</div>
	);
}
