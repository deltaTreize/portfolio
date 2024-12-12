import React from "react";
import { About } from "../../components/about/about.tsx";
import { Menu } from "../../components/menu/menu.tsx";
import { Technos } from "../../components/technos/technos.tsx";
import { Helmet } from 'react-helmet-async';
import "./acceuil.scss";

export function Acceuil() {
	const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page d'accueil du Portfolio de Ludovic LEBLOND",
    "url": "https://ludovic-leblond.fr",
    "description": "Portefolio de Ludovic LEBLOND, developpeur/integrateur WEB",
    "publisher": {
      "@type": "Organization",
      "name": "LEBLOND Ludovic",
      "url": "https://ludovic-leblond.fr"
    },
    "image": "https://ludovic-leblond.fr/assets/moi.webp",
  };
	return (
		<>
		<Helmet>
        <title>Portefolio de Ludovic LEBLOND</title>
        <meta name="description" content="Portefolio de Ludovic LEBLOND, developpeur/integrateur WEB" />
        
        {/* Balises Open Graph */}
        <meta property="og:title" content="Portefolio de Ludovic LEBLOND" />
        <meta property="og:description" content="Portefolio de Ludovic LEBLOND, developpeur/integrateur WEB" />
        <meta property="og:image" content="https://ludovic-leblond.fr/assets/moi.webp" />
        <meta property="og:url" content="https://ludovic-leblond.fr" />
        
        {/* Balises Twitter */}
        <meta name="twitter:title" content="Portefolio de Ludovic LEBLOND" />
        <meta name="twitter:description" content="Portefolio de Ludovic LEBLOND, developpeur/integrateur WEB" />
        <meta name="twitter:image" content="https://ludovic-leblond.fr/assets/moi.webp" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
		<div className="acceuil">
			<h1>LEBLOND Ludovic</h1>
			<Menu />
			<About />
			<Technos />
		</div>
		</>
	);
}
