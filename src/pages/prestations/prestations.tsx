import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./prestations.scss";
import Calendar from "react-calendar";

interface Creneaux {
	id: number;
	date: string;
	start_time: string;
	end_time: string;
	client_name: string;
}

export function Prestations() {
	const [reserved, setReserved] = useState<Creneaux[]>([]);
	const [reservedSlots, setReservedSlots] = useState<Creneaux[]>([]);
	const duration = 1;
	const [date, setDate] = useState(new Date().toLocaleDateString("fr-FR"));
	const availableSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

	const isDisabledDate = (date: Date) => {
		const today = new Date();
		const dayOfWeek = date.getDay();
		const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
		const isToday =
			date.getDate() === today.getDate() &&
			date.getMonth() === today.getMonth() &&
			date.getFullYear() === today.getFullYear();
		return isWeekend || isToday;
	};
	// Filtrer les créneaux réservés pour la date sélectionnée
	useEffect(() => {
		const selectedDateStr = date; // Stockée sous "jj/mm/aaaa"

		const filteredReserved = reserved.filter((res) => {
			const [day, month, year] = res.date.split("/").map(Number); // Split en JJ/MM/AAAA
			const resDate = new Date(year, month - 1, day).toLocaleDateString(
				"fr-FR"
			); // Créer une date correcte
			return resDate === selectedDateStr;
		});

		setReservedSlots(filteredReserved);
	}, [date, reserved]);

	const isSlotReserved = (startTime: number) => {
		return reservedSlots.some((slot) => {
			const slotStart = parseInt(slot.start_time);
			const slotEnd = parseInt(slot.end_time);

			return (
				(startTime >= slotStart && startTime < slotEnd) || // Chevauchement du début
				(startTime + duration > slotStart && startTime + duration <= slotEnd) // Chevauchement de la fin
			);
		});
	};

	useEffect(() => {
		fetch("https://ludovic-leblond.fr/api-portfolio-back/disponibilites")
			.then((response) => response.json())
			.then((data) => {
				setReserved(data.body);
			});
	}, []);

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		name: "Page des prestations du Portfolio de Ludovic LEBLOND",
		url: "https://ludovic-leblond.fr/prestations",
		description:
			"Page des prestations du Portfolio de Ludovic LEBLOND, Développeur/Intégrateur Web spécialisé en React et TypeScript. Découvrez mes projets et compétences.",
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
				<title> Page des prestations du Portfolio de Ludovic LEBLOND</title>
				<link rel="canonical" href="https://ludovic-leblond.fr/prestations" />
				<meta
					name="description"
					content="Page des prestations du Portfolio de Ludovic LEBLOND, Développeur/Intégrateur Web spécialisé en React et TypeScript. Découvrez mes projets et compétences."
				/>
				{/* JSON-LD */}
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
			</Helmet>

			<div className="prestations">
				<Link to="/" aria-label="liens vers accueil">
					<i className="fa-solid fa-arrow-left"></i>
				</Link>
				<h1>Prestations</h1>

				<div className="formations-wrapper">
					<div className="formation">
						<stripe-buy-button
							buy-button-id="buy_btn_1R6GPYI2EQNk9LI8m8srAKXB"
							publishable-key="pk_live_51R6Fy9I2EQNk9LI8v1dxmoPT14dywWYyMPWtvHJWc5yo8xcGSgoTtl1hJl6sOBI75WVxRYf7OP7ZqbKOf8ZwvlsJ00RYMYrbLK"
						></stripe-buy-button>{" "}
						<h2>
							Développez vos compétences en design graphique avec Canva et
							apprenez à créer des visuels professionnels en seulement 1 heure !
							Cette formation en visio vous permettra d'explorer des
							fonctionnalités avancées pour optimiser vos créations et gagner en
							autonomie.
						</h2>
					</div>
					<div className="formation">
						<stripe-buy-button
							buy-button-id="buy_btn_1R6GVlI2EQNk9LI8wNyMInkv"
							publishable-key="pk_live_51R6Fy9I2EQNk9LI8v1dxmoPT14dywWYyMPWtvHJWc5yo8xcGSgoTtl1hJl6sOBI75WVxRYf7OP7ZqbKOf8ZwvlsJ00RYMYrbLK"
						></stripe-buy-button>{" "}
						<h2>
							Prenez en main Canva comme un professionnel et créez des visuels
							percutants pour vos projets personnels ou professionnels ! Cette
							formation de 2 heures en visio vous permettra d'explorer en
							profondeur l'outil, de maîtriser ses fonctionnalités avancées et
							de gagner en autonomie sur la création graphique.
						</h2>
					</div>
					<div className="formation">
						<stripe-buy-button
							buy-button-id="buy_btn_1R6GYUI2EQNk9LI8FfgF3cnV"
							publishable-key="pk_live_51R6Fy9I2EQNk9LI8v1dxmoPT14dywWYyMPWtvHJWc5yo8xcGSgoTtl1hJl6sOBI75WVxRYf7OP7ZqbKOf8ZwvlsJ00RYMYrbLK"
						></stripe-buy-button>{" "}
						<h2>
							Cette formation express d'une heure sur Photoshop vous permettra
							de découvrir les bases essentielles du logiciel. En une heure,
							vous apprendrez à naviguer dans l'interface, utiliser les
							principaux outils de retouche et de création graphique, et
							appliquer des ajustements rapides aux images. Idéale pour les
							débutants souhaitant une initiation rapide et efficace.
						</h2>
					</div>
					<div className="formation">
						<stripe-buy-button
							buy-button-id="buy_btn_1R6GavI2EQNk9LI8pBCWetYU"
							publishable-key="pk_live_51R6Fy9I2EQNk9LI8v1dxmoPT14dywWYyMPWtvHJWc5yo8xcGSgoTtl1hJl6sOBI75WVxRYf7OP7ZqbKOf8ZwvlsJ00RYMYrbLK"
						></stripe-buy-button>{" "}
						<h2>
							Cette formation approfondie de deux heures vous offre une
							meilleure maîtrise des fonctionnalités de Photoshop. En plus des
							bases, vous apprendrez à travailler avec les calques, les masques
							de fusion, les outils de sélection avancés et les retouches
							précises. Un excellent choix pour ceux qui souhaitent aller plus
							loin et acquérir des compétences solides en édition d’image et en
							création graphique.
						</h2>
					</div>
				</div>
				<h2>Voir les créneaux disponibles</h2>
				<div className="calendar-wrapper">
					<Calendar
						onChange={(newDate) => {
							if (newDate instanceof Date) {
								setDate(newDate.toLocaleDateString("fr-FR"));
							}
						}}
						value={new Date(date.split("/").reverse().join("-"))}
						selectRange={false}
						tileDisabled={({ date }) => isDisabledDate(date)}
					/>
					<div className="slots-list">
						{availableSlots.map((slot) => (
							<div
								key={slot}
								className={`slot ${
									isSlotReserved(slot) ? "reserved" : "available"
								}`}
							>
								{slot}:00 - {slot + duration}:00
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
