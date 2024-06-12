import React from "react";
import { Background } from "./components/background/background.tsx";
import { Footer } from "./components/footer/footer.tsx";
import { Menu } from "./components/menu/menu.tsx";
import {About} from "./components/about/about.tsx";

import "./App.scss";
import { Technos } from "./components/technos/technos.tsx";

function App() {
	return (
    <>
				<h1>LEBLOND Ludovic</h1>
				<Background />
				<Menu />
				<About />
				<Technos />
				<Footer />
    </>
	);
}

export default App;
