import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { About } from "../../components/about/about.tsx";
import projets from "../../Projets.json";
import "./acceuil.scss";

export function Acceuil() {
	const [allProjetImages, setAllProjetImages] = useState<string[]>([]);
	const [picture, setPicture] = useState<string>(allProjetImages[0]);
	const width = window.innerWidth;

	useEffect(() => {
		projets.forEach((projet) => {
			setAllProjetImages((prev) => [...prev, projet.pictureHome]);
			setPicture(projet.pictureHome);
		});
	}, []);

	useEffect(() => {
		let i = 0;
		const interval = setInterval(() => {
			setPicture(allProjetImages[i]);
			i = (i + 1) % allProjetImages.length;
		}, 5000);
		return () => clearInterval(interval);
	}, [allProjetImages]);

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		name: "Page d'accueil du Portfolio de Ludovic LEBLOND",
		url: "https://ludovic-leblond.fr",
		description:
			"Portfolio de Ludovic LEBLOND, Développeur/Intégrateur Web spécialisé en React et TypeScript. Découvrez mes projets et compétences.",
		publisher: {
			"@type": "Person",
			name: "Ludovic LEBLOND",
			url: "https://ludovic-leblond.fr",
		},
		image: "https://ludovic-leblond.fr/assets/logo.webp",
		mainEntity: {
			"@type": "Person",
			name: "Ludovic LEBLOND",
			url: "https://ludovic-leblond.fr/",
		},
	};
	return (
		<>
			<Helmet>
				<title>Portfolio de Ludovic LEBLOND</title>
				<link rel="canonical" href="https://ludovic-leblond.fr" />
				<meta
					name="description"
					content="Portfolio de Ludovic LEBLOND, Développeur/Intégrateur Web spécialisé en React et TypeScript. Découvrez mes projets et compétences."
				/>
				{/* JSON-LD */}
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Helmet>
			<div className="acceuil">
				<h1>LEBLOND Ludovic</h1>
				<div className="acceuil-wrapper">
					<nav>
						<div
							className="prestation-container"
							style={
								width <= 425
									? { backgroundImage: `url("/assets/presta7-425.webp")` }
									: width <= 768
									? { backgroundImage: `url("/assets/presta7-768.webp")` }
									: {
											backgroundImage: `url("/assets/presta7.webp")`,
									  }
							}
						>
							<h2>PRESTATIONS</h2>
							<div className="prestation-wrapper">
								<div className="title-link">
									<h3>
										Venez découvrir les differentes prestations que je propose !
									</h3>
									<NavLink to="/prestations" className="menu-link">
										Prestations
									</NavLink>
								</div>
								<div className="images">
									<div
										style={{ backgroundImage: `url(/assets/photoshop.webp)` }}
									></div>
									<div
										style={{ backgroundImage: `url(/assets/canva.webp)` }}
									></div>
								</div>
							</div>
						</div>
						<div
							className="projets-container"
							style={{
								backgroundImage: `url("/assets/businessman-2682712_1280.webp")`,
							}}
						>
							<h2>PROJETS</h2>
							<div className="projets-wrapper">
								<div className="title-link">
									<h3>
										Venez découvrir les differents projets déja realisés !
									</h3>
									<NavLink to="/projets" className="menu-link">
										Projets
									</NavLink>
								</div>
								<div className="images">
									<div style={{ backgroundImage: `url("${picture}")` }} />
								</div>
							</div>
						</div>
					</nav>
					<About />
				</div>
			</div>
		</>
	);
}
