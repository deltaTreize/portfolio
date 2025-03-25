import React, { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/footer.tsx";
import { Acceuil } from "./pages/acceuil/acceuil.tsx";
import { Projet } from "./pages/projet/projet.tsx";
import { ProjetPage } from "./pages/projetPage/projetPage.tsx";
import { Prestations } from "./pages/prestations/prestations.tsx";
import GoogleCalendarBooking from "./pages/reservation/reservation.tsx";
import { HelmetProvider } from "react-helmet-async";
import "./App.scss";

function App() {
	return (
		<HelmetProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Acceuil />} />
						<Route path="/projets" element={<Projet />} />
						<Route path="/projets/:projetName" element={<ProjetPage />} />
						<Route path="/prestations" element={<Prestations />} />
						<Route path="/prestations/reservation" element={<GoogleCalendarBooking />} />
					</Routes>
					<Footer />
				</BrowserRouter>
		</HelmetProvider>
	);
}

export default App;
