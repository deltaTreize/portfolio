import React from "react";
import technos from "../../Techno.json";

import "./technos.scss";

export function Technos() {
	return (
		<div className="technos">
			<h2>TECHNOLOGIES</h2>
			<ul>
				{technos.slice(0, 12).map((tech, index) => (
					<li key={index}>
						<div dangerouslySetInnerHTML={{ __html: tech.svg }} />
						{tech.name}
					</li>
				))}
			</ul>
		</div>
	);
}
