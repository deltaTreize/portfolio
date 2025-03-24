import React from "react";
import { Link, useParams } from "react-router-dom";
import projets from "../../Projets.json";
import technos from "../../Techno.json";
import "./projetPage.scss";
import { Helmet } from "react-helmet";

export function ProjetPage() {
	const { projetName } = useParams();
	const projet = projets.find((projet) => projet.name === projetName);
	const technosProjet: JSX.Element[] = [];

	projet?.techno.forEach((techno) => {
		const technoDetails = technos.find((t) => t.name === techno);
		if (technoDetails) {
			technosProjet.push(
				<div dangerouslySetInnerHTML={{ __html: technoDetails.svg }} />
			);
		}
	});

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: projet?.name,
		description: projet?.text,
		url: `https://ludovic-leblond.fr/projets/${projet?.name}`,
		image: projet?.pictureHome,
		author: {
			"@type": "Person",
			name: "Ludovic LEBLOND",
		},
		mainEntityOfPage: `https://ludovic-leblond.fr/projets/${projet?.name}`,
	};

	if (!projet) {
		return <div>Chargement...</div>;
	}

	return (
		<>
			<Helmet>
				<title>{projet?.name} - Mon Portfolio</title>
				<link
					rel="canonical"
					href={`https://ludovic-leblond.fr/projets/${projet?.name}`}
				/>
				<meta name="description" content={projet?.text} />

				{/* Open Graph */}
				<meta property="og:title" content={projet?.name} />
				<meta property="og:description" content={projet?.text} />
				<meta
					property="og:url"
					content={`https://ludovic-leblond.fr/projets/${projet?.name}`}
				/>
				<meta property="og:locale" content="fr_FR" />
				<meta property="article:author" content="Ludovic LEBLOND" />
				<meta property="og:type" content="article" />
				<meta property="og:image" content={projet?.pictureHome} />
				{/* Balises Twitter */}
				<meta name="twitter:title" content={projet?.name} />
				<meta name="twitter:description" content={projet?.text} />
				<meta name="twitter:image" content={projet?.pictureHome} />
				<meta name="twitter:card" content="summary_large_image" />

				{/* JSON-LD */}
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Helmet>
			<div className="projetPage">
				<Link to="/projets" aria-label="liens vers accueil" style={{ color: projet?.color }}>
					<i className="fa-solid fa-arrow-left" ></i>
				</Link>
				<h1 style={{ color: projet?.color }}>{projet?.name}</h1>
				<div className="projet-wrapper">
					<div className="wrapper-img">
						<nav className="wrapper-img-nav">
							{projet?.code && (
								<a
									href={projet?.code}
									target="_blank"
									rel="noreferrer"
									aria-label="liens vers code"
								>
									<i className="fa-brands fa-github"></i>Code
								</a>
							)}
							{projet?.site && (
								<a
									href={projet?.site}
									target="_blank"
									rel="noreferrer"
									aria-label="liens vers site"
								>
									<i className="fa-solid fa-globe"></i>Site
								</a>
							)}
						</nav>
						<img src={projet?.picture} alt="visuel du site" />
					</div>
					<div className="wrapper-projet">
						<h2 className="wrapper-projet-text">{projet?.text}</h2>
						<div className="wrapper-projet-technos">
							<ul>
								{technosProjet.map((techno, index) => (
									<li key={index}>{techno}</li>
								))}
							</ul>
						</div>
						<div className="wrapper-projet-infos">
							{projet?.ameliorations && (
								<div className="wrapper-projet-infos-ameliorations">
									<h3>Améliorations à apporter</h3>
									<ul>
										{projet?.ameliorations?.map((amelioration, index) => (
											<li key={index}>{amelioration}</li>
										))}
									</ul>
								</div>
							)}
							{projet?.competences && (
								<div className="wrapper-projet-infos-competences">
									<h3>Compétences aquises</h3>
									<ul>
										{projet?.competences?.map((competence, index) => (
											<li key={index}>{competence}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
