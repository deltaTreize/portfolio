import React from "react";
import { Background } from "./components/background/background.js";
import { Navbar } from "./components/navBar/navBar.js";
import { Container } from "./components/container/container.js";

import "./App.scss";

function App() {
	return (
    <>
				<Navbar />
				<Background />
        <Container/>
    </>
	);
}

export default App;
