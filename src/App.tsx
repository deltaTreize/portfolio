import React from "react";
import { Background } from "./components/background/background.tsx";
import { Navbar } from "./components/navBar/navBar.tsx";
import { Menu } from "./pages/menu/menu.tsx";

import "./App.scss";

function App() {
	return (
    <>
				<Navbar />
				<Background />
				<Menu />
    </>
	);
}

export default App;
