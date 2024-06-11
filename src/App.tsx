import React from "react";
import { Background } from "./components/background/background.tsx";
import { Navbar } from "./components/navBar/navBar.tsx";
import { Menu } from "./components/menu/menu.tsx";
import {About} from "./components/about/about.tsx";

import "./App.scss";
import { Technos } from "./components/technos/technos.tsx";

function App() {
	return (
    <>
				<Navbar />
				<Background />
				<Menu />
				<About />
				<Technos />
    </>
	);
}

export default App;
