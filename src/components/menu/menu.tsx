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
				<li style={{ '--i': 0, '--color': 'red', '--img': 'url("/assets/candyshop.png")' } as React.CSSProperties}>
					{" "}
					<Link
						to={"/candyshop-by-stess.fr"}
						aria-label="lien vers projet candyshop-by-stess.fr"
					>
					<p className="title" style={{fontSize: "0.7vw"}}>Candyshop-by-stess.fr</p>
					</Link>
				</li>
				<li style={{ '--i': 1, '--color': '#7451eb', '--img': 'url("/assets/ohmyfood.webp")' } as React.CSSProperties} className="rotate">
					{" "}
					<Link
						to={"/ohmyfood"}
						aria-label="lien vers projet ohmyfood.com"
					>
					<p className="title">OhMyFood</p>
					</Link>
				</li>
				<li style={{ '--i': 2, '--color': '#7451eb', '--img': 'url("/assets/sophieBuel.webp")' } as React.CSSProperties}>
					{" "}
					<Link
						to={"/sophieBuel"}
						aria-label="lien vers projet sophiebuel.com"
					>
					<p className="title">Sophie Buel</p>
					</Link>
				</li>
				<li style={{ '--i': 3, '--color': '#7451eb', '--img': 'url("/assets/kasa.webp")' } as React.CSSProperties} className="rotate">
					{" "}
					<Link
						to={"/Kasa"}
						aria-label="lien vers projet kasa.com"
					>
					<p className="title">Kasa</p>
					</Link>
				</li>
				<li style={{ '--i': 4, '--color': 'red', '--img': 'url("/assets/ludobank.webp")' } as React.CSSProperties}>
					{" "}
					<Link
						to={"/LudoBank"}
						aria-label="lien vers projet ludobank.com"
					>
					<p className="title">LudoBank</p>
					</Link>
				</li>
				<li style={{ '--i': 5, '--color': 'red', '--img': 'url("/assets/harryPotter.webp")' } as React.CSSProperties} className="rotate">
					{" "}
					<Link
						to={"/HarryPotter"}
						aria-label="lien vers projet harrypotter"
					>
					<p className="title">Harry Potter</p>
					</Link>
				</li>
			</ul>
		</div>
	);
}
