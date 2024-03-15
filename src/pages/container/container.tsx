import React from "react";
import AboutPage from "../aboutPage/aboutPage.tsx";
import ProjetInfos from "../projetInfos/projetInfos.tsx";
import ProjetVisual from "../projetVisual/projetVisual.tsx";
import "./container.scss";

function Book() {
	return (
		<div className="container">
			<div className="book">
				<input type="checkbox" id="checkbox-cover" />
				<input type="checkbox" id="checkbox-page1" />
				<input type="checkbox" id="checkbox-page2" />
				<input type="checkbox" id="checkbox-page3" />
				<div className="book">
					<div className="cover">
						<p>Portefolio de Ludovic LEBLOND</p>
						<label htmlFor="checkbox-cover"></label>
					</div>
					<div className="page" id="page1">
						<div className="front-page">
							<AboutPage />
							<label className="next" htmlFor="checkbox-page1">
								<i className="fas fa-chevron-right"></i>
							</label>
						</div>
						<div className="back-page">
							<ProjetInfos
                description={"Ce projet avait pour but de faire travailler le CSS et d'utiliser Figma (une première pour moi). Avec une maquette Mobile et Desktop, j'ai été dans l'obligation de faire le site entierement responsive et en accord avec la maquette."}
                nameProjet={"p3"} language1={"HTML"} language2={"CSS"} language3={"Javascript"} language4={""} language5={""} techno1={"NodeJs"} techno2={"Express"} techno3={"Figma"} techno4={"React"} techno5={""} competance1={"Figma"} competance2={"Responsive"} competance3={"FontAwesome"} competance4={""} competance5={""} ameliorations1={"filtrage grace au input location"} ameliorations2={"filtrage grace aux filtres"} ameliorations3={"créer les pages pour tout les logements"} ameliorations4={"utiliser react avec react-router"} ameliorations5={""}/>
							<label className="prev" htmlFor="checkbox-page1">
								<i className="fas fa-chevron-left"></i>
							</label>
						</div>
					</div>
					<div className="page" id="page2">
						<div className="front-page">
              <ProjetVisual  title={"BOOKI.COM"} imageAdresse={"./assets/booki.png"} imageAlt={"visuel du site"} linkInternet={"https://deltatreize.github.io/projet3/"} linkGitHub={"https://github.com/deltaTreize/projet3"}/>
							<label className="next" htmlFor="checkbox-page2">
								<i className="fas fa-chevron-right"></i>
							</label>
						</div>
						<div className="back-page">
							<img src="2.jpg" alt="kvbljhs" />
							<label className="prev" htmlFor="checkbox-page2">
								<i className="fas fa-chevron-left"></i>
							</label>
						</div>
					</div>
					<div className="page" id="page3">
						<div className="front-page">
							<h2>Page 3</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Nihil magni laudantium beatae
								quia. Recusandae, fuga quas consectetur
								perferendis aperiam esse velit veniam ducimus?
								Quisquam consequatur perferendis quidem quia,
								recusandae ab!
							</p>
						</div>
					</div>
					<div className="back-cover"></div>
				</div>
			</div>
		</div>
	);
}

export default Book;
