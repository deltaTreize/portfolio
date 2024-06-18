import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.scss";

export function Menu() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="menu-wrapper">
			<h2>PROJETS</h2>
			<ul className={`menu ${isActive ? "active" : ""}`}>
				<li className="menuToggle" onClick={() => setIsActive(!isActive)}>
					{!isActive && <p>open</p>}
					{isActive && <p>close</p>}
				</li>
				<li style={{ '--i': 0, '--color': '#7451eb', '--img': 'url("/assets/booki.webp")' } as React.CSSProperties}>
					{" "}
					<Link
						to={"/booki.com"}
						aria-label="lien vers projet booki.com"
					>
					<p className="title">booki.com</p>
					</Link>
				</li>
				<li style={{ '--i': 1, '--color': '#7451eb', '--img': 'url("/assets/ohmyfood.webp")' } as React.CSSProperties} className="rotate">
					{" "}
					<Link
						to={"/ohmyfood.com"}
						aria-label="lien vers projet ohmyfood.com"
					>
					<p className="title">OhMyFood</p>
					</Link>
				</li>
				<li style={{ '--i': 2, '--color': '#7451eb', '--img': 'url("/assets/sophieBuel.webp")' } as React.CSSProperties}>
					{" "}
					<Link
						to={"/sophieBuel.com"}
						aria-label="lien vers projet sophiebuel.com"
					>
					<p className="title">Sophie Buel</p>
					</Link>
				</li>
				<li style={{ '--i': 3, '--color': '#7451eb', '--img': 'url("/assets/kasa.webp")' } as React.CSSProperties} className="rotate">
					{" "}
					<Link
						to={"/Kasa.com"}
						aria-label="lien vers projet kasa.com"
					>
					<p className="title">Kasa.com</p>
					</Link>
				</li>
				<li style={{ '--i': 4, '--color': 'red', '--img': 'url("/assets/argentbank.webp")' } as React.CSSProperties}>
					{" "}
					<Link
						to={"/LudoBank.com"}
						aria-label="lien vers projet ludobank.com"
					>
					<p className="title">LudoBank</p>
					</Link>
				</li>
				<li style={{ '--i': 5, '--color': 'red', '--img': 'url("/assets/harryPotter.webp")' } as React.CSSProperties} className="rotate">
					{" "}
					<Link
						to={"/HarryPotter.com"}
						aria-label="lien vers projet harrypotter"
					>
					<p className="title">Harry Potter</p>
					</Link>
				</li>
			</ul>
		</div>
	);
}
