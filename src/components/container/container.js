import "./container.scss";

export function Container() {

	return (
		<div className="container" >
			<div className="about" id="about">
				<img src="./assets/moi.png" alt="" />
				<div className="texte">
					<h2>LEBLOND Ludovic</h2>
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
			</div>
      <div className="techno"></div>
		</div>
	);
}
