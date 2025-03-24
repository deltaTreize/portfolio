import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Menu } from "../../components/menu/menu.tsx";
import { Technos } from "../../components/technos/technos.tsx";
import "./projet.scss";

export function Projet() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: "Page des projets du Portfolio de Ludovic LEBLOND",
		url: "https://ludovic-leblond.fr/projets",
		description:
			"Page des projets du Portfolio de Ludovic LEBLOND, Développeur/Intégrateur Web spécialisé en React et TypeScript. Découvrez mes projets et compétences.",
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
				<title> Page des projets du Portfolio de Ludovic LEBLOND</title>
				<link rel="canonical" href="https://ludovic-leblond.fr/projets" />
				<meta
					name="description"
					content="Page des projets du Portfolio de Ludovic LEBLOND, Développeur/Intégrateur Web spécialisé en React et TypeScript. Découvrez mes projets et compétences."
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Portfolio de Ludovic LEBLOND" />
				<meta
					property="og:description"
					content="Portfolio de Ludovic LEBLOND, Développeur/Intégrateur Web spécialisé en React et TypeScript. Découvrez mes projets et compétences."
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://ludovic-leblond.fr/assets/logo.webp"
				/>
				<meta property="og:url" content="https://ludovic-leblond.fr" />
				<meta property="og:locale" content="fr_FR" />

				{/* Twitter */}
				<meta name="twitter:title" content="Portfolio de Ludovic LEBLOND" />
				<meta
					name="twitter:description"
					content="Portfolio de Ludovic LEBLOND, Développeur/Intégrateur Web spécialisé en React et TypeScript. Découvrez mes projets et compétences."
				/>
				<meta
					name="twitter:image"
					content="https://ludovic-leblond.fr/assets/logo.webp"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@deltaTreize" />

				{/* JSON-LD */}
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Helmet>

			<div className="projet">
				<Link to="/" aria-label="liens vers accueil">
					<i className="fa-solid fa-arrow-left"></i>
				</Link>
				<Menu />
				<Technos />
			</div>
		</>
	);
}
