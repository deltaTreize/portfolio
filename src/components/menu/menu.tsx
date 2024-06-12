import React, { useState } from "react";
import "./menu.scss";

export function Menu() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="menu-wrapper">
			<h2>PROJETS</h2>
			<ul className={`menu ${isActive ? "active" : ""}`}>
				<div className="menuToggle" onClick={() => setIsActive(!isActive)}>
					{!isActive && <p>open</p>}
					{isActive && <p>close</p>}
					
				</div>
				<li style={{ '--i': 0, '--color': 'red', '--img': 'url("/assets/booki.png")' } as React.CSSProperties}>
					{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://deltatreize.github.io/projet3/"
						aria-label="lien vers projet booki.com"
					>
					<p>booki.com</p>
					</a>
				</li>
				<li style={{ '--i': 1, '--color': 'green', '--img': 'url("/assets/ohmyfood.png")' } as React.CSSProperties} className="rotate">
					{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://deltatreize.github.io/projet4/homePage.html"
						aria-label="lien vers projet ohmyfood.com"

					>
					<p className="title">OhMyFood</p>
					</a>
				</li>
				<li style={{ '--i': 2, '--color': 'yellow', '--img': 'url("/assets/sophiebuel.png")' } as React.CSSProperties}>
					{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://deltatreize.github.io/projet6/FrontEnd/index.html"
						aria-label="lien vers projet sophiebuel.com"

					>
					<p className="title">Sophie Buel</p>
					</a>
				</li>
				<li style={{ '--i': 3, '--color': 'blue', '--img': 'url("/assets/kasa.png")' } as React.CSSProperties} className="rotate">
					{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://p8-kasa-umber.vercel.app/"
						aria-label="lien vers projet kasa.com"

					>
					<p className="title">Kasa.com</p>
					</a>
				</li>
				<li style={{ '--i': 4, '--color': 'purple', '--img': 'url("/assets/argentbank.png")' } as React.CSSProperties}>
					{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://p11-three.vercel.app/"
						aria-label="lien vers projet ludobank.com"

					>
					<p className="title">LudoBank</p>
					</a>
				</li>
				<li style={{ '--i': 5, '--color': 'skyblue', '--img': 'url("/assets/harryPotter.png")' } as React.CSSProperties} className="rotate">
					{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://harry-potter-react-three.vercel.app/"
						aria-label="lien vers projet harrypotter"

					>
					<p className="title">Harry Potter</p>
					</a>
				</li>
			</ul>
		</div>
	);
}
