import React, { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Background } from "./components/background/background.tsx";
import { Footer } from "./components/footer/footer.tsx";
import { Acceuil } from "./pages/acceuil/acceuil.tsx";

import "./App.scss";
import { Projet } from "./pages/projet/projet.tsx";

function App() {
	return (
		<StrictMode>
			<BrowserRouter>
				<Background />
				<Routes>
					<Route path="/" element={<Acceuil />} />
					<Route path="/:projetName" element={<Projet />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</StrictMode>
	);
}

export default App;
