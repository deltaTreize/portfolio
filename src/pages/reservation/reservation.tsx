import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useLocation, useNavigate } from "react-router-dom";

import "react-calendar/dist/Calendar.css";
import "./reservation.scss";

interface Creneaux {
	id: number;
	date: string;
	start_time: string;
	end_time: string;
	client_name: string;
}

const ReservationCalendar = () => {
	const { search } = useLocation();
  const navigate = useNavigate();
	const [date, setDate] = useState(new Date().toLocaleDateString("fr-FR"));
	const [selectedTime, setSelectedTime] = useState<number>(0);
	const [reserved, setReserved] = useState<Creneaux[]>([]);
	const [reservedSlots, setReservedSlots] = useState<Creneaux[]>([]);
	const [duration, setDuration] = useState<number>(0);
	const [nameFormation, setNameFormation] = useState<string>("");
	const [clientName, setClientName] = useState("");
	const [clientMail, setClientMail] = useState("");
	const [clientTel, setClientTel] = useState("");
	const [note, setNote] = useState("");
	const [message, setMessage] = useState("");

	// Liste des créneaux horaires
	const availableSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

	// Charger les réservations
	useEffect(() => {
		fetch("https://ludovic-leblond.fr/api-portfolio-back/disponibilites")
			.then((response) => response.json())
			.then((data) => {
				setReserved(data.body);
			});
	}, []);

	useEffect(() => {
		const params = new URLSearchParams(search);
		const durationParam = params.get("duration");
		const nameFormationParam = params.get("formation");
		if (durationParam) setDuration(parseInt(durationParam));
		if (nameFormationParam) setNameFormation(nameFormationParam);
	}, [search]);

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

	// Vérification si un créneau est réservé ou en conflit
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

	const handleSubmit = async (e) => {

    e.preventDefault();
		if (!selectedTime) {
			setMessage("Veuillez sélectionner un créneau.");
			return;
		}

		const bodyContent = JSON.stringify({
			date: date,
			start_time: selectedTime.toString(),
			end_time: (selectedTime + duration).toString(),
			client_name: clientName,
			client_email: clientMail,
			client_tel: clientTel,
			formation_name: nameFormation,
			note: note,
		});

		try {
			const response = await fetch(
				"https://ludovic-leblond.fr/api-portfolio-back/reserver",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: bodyContent,
				}
			);

			if (response.status === 200) {
				setMessage("Réservation réussie !");
				setTimeout(() => {
          console.log("Redirection vers prestations");
					navigate("/prestations");
				}, 3000);
			} else {
				setMessage("Erreur lors de la réservation.");
			}
		} catch (error) {
			console.error("Erreur API :", error);
			setMessage("Erreur de connexion.");
		}

	};

	const handleTimeSelect = (startTime: number) => {
		if (!isSlotReserved(startTime)) {
			setSelectedTime(startTime);
		}
	};

	// Fonction pour vérifier si le jour est un week-end ou le jour actuel
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

	const isFormValid = () => {
		return (
			clientName !== "" &&
			clientMail !== "" &&
			clientTel !== "" &&
			selectedTime !== 0 &&
			!isSlotReserved(selectedTime)
		);
	};

	return (
		<div className="reservation-container">
			<h2>Réserver un créneau</h2>
			<div className="page-wrapper">
				<div className="calendar-wrapper">
					<Calendar
						onChange={(newDate) => {
							if (newDate instanceof Date) {
								setDate(newDate.toLocaleDateString("fr-FR"));
							}
						}}
						value={new Date(date.split("/").reverse().join("-"))}
						selectRange={false}
						tileDisabled={({ date }) => isDisabledDate(date)} // Exclure le jour J et les week-ends
					/>
					<div className="slots-section">
						<h3>Créneaux disponibles :</h3>
						<div className="slots-list">
							{availableSlots.map((slot) => (
								<div
									key={slot}
									className={`slot ${
										isSlotReserved(slot)
											? "reserved"
											: selectedTime === slot
											? "selected"
											: "available"
									}`}
									onClick={() => handleTimeSelect(slot)}
								>
									{slot}:00 - {slot + duration}:00
								</div>
							))}
						</div>
					</div>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="info-wrapper">
						<div className="info-client">
							<label>
								Nom du client :
								<input
									type="text"
									value={clientName}
									onChange={(e) => setClientName(e.target.value)}
									required
								/>
							</label>
							<label>
								Email du client :
								<input
									type="email"
									value={clientMail}
									onChange={(e) => setClientMail(e.target.value)}
									required
								/>
							</label>
							<label>
								Téléphone du client :
								<input
									type="tel"
									pattern="[0-9]{10}"
									maxLength={10}
									value={clientTel}
									onChange={(e) => setClientTel(e.target.value)}
									required
								/>
							</label>
						</div>
						<label className="note">
							Note :
							<textarea
								value={note}
								onChange={(e) => setNote(e.target.value)}
							/>
						</label>
					</div>
					<button type="submit" disabled={!isFormValid()}>
						Réserver
					</button>
				</form>
				{message && <p>{message}</p>}
			</div>
		</div>
	);
};

export default ReservationCalendar;
