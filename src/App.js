import React from "react";
import { Background } from "./components/background/background.tsx";
import { Navbar } from "./components/navBar/navBar.tsx";
import  Book  from "./pages/container/container.tsx";

import "./App.scss";

function App() {
	return (
    <>
				<Navbar />
				{/* <Background /> */}
				<Book/>
    </>
	);
}

export default App;
