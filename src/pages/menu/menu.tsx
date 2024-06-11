import React, { useState } from "react";
import "./menu.css";

export function Menu() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="menu-wrapper">
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
					>
					</a>
					<p className="title">booki.com</p>
				</li>
				<li style={{ '--i': 1, '--color': 'green', '--img': 'url("/assets/ohmyfood.png")' } as React.CSSProperties}>
					{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://deltatreize.github.io/projet4/homePage.html"
					>
					</a>
					<p className="title">OhMyFood</p>
				</li>
				<li style={{ '--i': 2, '--color': 'yellow', '--img': 'url("/assets/sophiebuel.png")' } as React.CSSProperties}>
					{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://deltatreize.github.io/projet6/FrontEnd/index.html"
					>
					</a>
					<p className="title">Sophie Buel</p>
				</li>
				<li style={{ '--i': 3, '--color': 'blue', '--img': 'url("/assets/kasa.png")' } as React.CSSProperties} className="rotate">
					{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://p8-kasa-umber.vercel.app/"
					>
					</a>
					<p className="title">Kasa.com</p>
				</li>
				<li style={{ '--i': 4, '--color': 'purple', '--img': 'url("/assets/argentbank.png")' } as React.CSSProperties}>
					{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://p11-three.vercel.app/"
					>
					</a>
					<p className="title">LudoBank</p>
				</li>
				<li style={{ '--i': 5, '--color': 'skyblue', '--img': 'url("/assets/harryPotter.png")' } as React.CSSProperties} className="rotate">
					{" "}
					<a
						target="_blank"
						rel="noreferrer"
						href="https://harry-potter-react-three.vercel.app/"
					>
					</a>
					<p className="title">Harry Potter</p>
				</li>
			</ul>
		</div>
	);
}
