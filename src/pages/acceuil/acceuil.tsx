import React from "react";
import { About } from "../../components/about/about.tsx";
import { Menu } from "../../components/menu/menu.tsx";
import { Technos } from "../../components/technos/technos.tsx";
import { Helmet } from "react-helmet-async";
import "./acceuil.scss";

export function Acceuil() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		name: "Page d'accueil du Portfolio de Ludovic LEBLOND",
		url: "https://ludovic-leblond.fr",
		description: "Portfolio de Ludovic LEBLOND, Développeur/Intégrateur Web spécialisé en React et TypeScript. Découvrez mes projets et compétences.",
		publisher: {
			"@type": "Person",
			name: "Ludovic LEBLOND",
			url: "https://ludovic-leblond.fr",
		},
		image: "https://ludovic-leblond.fr/assets/moi.webp",
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

				{/* Open Graph */}
				<meta property="og:title" content="Portfolio de Ludovic LEBLOND" />
				<meta
					property="og:description"
					content="Portfolio de Ludovic LEBLOND, Développeur/Intégrateur Web spécialisé en React et TypeScript. Découvrez mes projets et compétences."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://ludovic-leblond.fr/assets/moi.webp" />
				<meta property="og:url" content="https://ludovic-leblond.fr" />
				<meta property="og:locale" content="fr_FR" />

				{/* Twitter */}
				<meta name="twitter:title" content="Portfolio de Ludovic LEBLOND" />
				<meta
					name="twitter:description"
					content="Portfolio de Ludovic LEBLOND, Développeur/Intégrateur Web spécialisé en React et TypeScript. Découvrez mes projets et compétences."
				/>
				<meta name="twitter:image" content="https://ludovic-leblond.fr/assets/moi.webp" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@ton_twitter" /> {/* Remplace "@ton_twitter" par ton handle */}

				{/* JSON-LD */}
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Helmet>
			<div className="acceuil">
				<h1>LEBLOND Ludovic</h1>
				<div className="acceuil-wrapper">
					<About />
					<Menu />
					<Technos />
				</div>
			</div>
		</>
	);
}
