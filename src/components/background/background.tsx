import React from "react";
import { useState } from "react";

import "./background.scss";

export function Background() {
	const [left, setLeft] = useState();
	const [top, setTop] = useState();
	const mouveCercle = (e) => {
		setLeft(e.clientX);
		setTop(e.clientY);
	};
	return (
		<div className="background" onMouseMoveCapture={mouveCercle}>
			<span className="cercle" style={{ left: left, top: top }}></span>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
			<div className="background-line">
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
				<span className="polygone"></span>
			</div>
		</div>
	);
}
