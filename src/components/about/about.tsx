import React from "react";
import "./about.scss";

 export function About() {

	return (
			<div className="about" id="about">
				<div className="entete">
					<h2>A propos de moi</h2>
				<img src="./assets/moi.png" alt="moi" />
				</div>
					<p>
						Depuis que j'ai 6 ans, je suis passionné d'informatique.
						J'ai toujours voulu travailler dans le monde de
						l'informatique et plus particulièrement dans le monde de
						la programmation. Et c’est ainsi, qu’à 34ans, je me
						lance dans l’apprentissage du développement WEB. Après 4
						mois intensif d’apprentissage en autodidacte, j’intègre
						la formation 'Développeur/intégrateur WEB' au sein de
						l’école en ligne OpenClassroom.
					</p>
				</div>

	);
}