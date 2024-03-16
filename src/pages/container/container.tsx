import React from "react";
import AboutPage from "../aboutPage/aboutPage.tsx";
import ProjetInfos from "../projetInfos/projetInfos.tsx";
import ProjetVisual from "../projetVisual/projetVisual.tsx";
import "./container.scss";

function Book() {
	return (
		<div className="container">
			<div className="book">
				<input type="checkbox" id="checkbox-page0" />
				<input type="checkbox" id="checkbox-page1" />
				<input type="checkbox" id="checkbox-page2" />
				<input type="checkbox" id="checkbox-page3" />
				<input type="checkbox" id="checkbox-page4" />
				<input type="checkbox" id="checkbox-page5" />
				<input type="checkbox" id="checkbox-page6" />
				<input type="checkbox" id="checkbox-page7" />
				<div className="book">
					<div className="cover" id="page0">
					<div className="front-page">
						<p>Portefolio de Ludovic LEBLOND</p>
						<label htmlFor="checkbox-page0"></label>
					</div>
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
                description={"Ce projet avait pour but de travailler le CSS et d'utiliser Figma (une première pour moi). Avec une maquette Mobile et Desktop, j'ai été dans l'obligation de faire le site entièrement responsive et en accord avec la maquette."}
                nameProjet={"p3"} langage1={"HTML"} langage2={"CSS"} langage3={""} langage4={""} langage5={""} techno1={"NodeJs"} techno2={""} techno3={"Figma"} techno4={""} techno5={""} competance1={"utiliser FIGMA pour lire et découper une maquette"} competance2={"créer un site responsive pour toutes tailles d'écrans"} competance3={""} competance4={""} competance5={""} ameliorations1={"filtrage grace au input location"} ameliorations2={"filtrage grace aux filtres"} ameliorations3={"créer les pages pour tous les logements"} ameliorations4={"utiliser react avec react-router"} ameliorations5={""}/>
							<label className="prev" htmlFor="checkbox-page1">
								<i className="fas fa-chevron-left"></i>
							</label>
						</div>
					</div>
					<div className="page" id="page2">
						<div className="front-page">
              <ProjetVisual  title={"BOOKI.COM"} imageAdresse={"./assets/booki.png"} linkInternet={"https://deltatreize.github.io/projet3/"} linkGitHub={"https://github.com/deltaTreize/projet3"}/>
							<label className="next" htmlFor="checkbox-page2">
								<i className="fas fa-chevron-right"></i>
							</label>
						</div>
						<div className="back-page">
							<ProjetInfos
                description={"Ce projet avait pour but de créer un site de plusieurs pages et d'apprendre SCSS. Avec interdiction d'utiliser JavaScript"}
                nameProjet={"ohmyfood"} langage1={"HTML"} langage2={"SCSS"} langage3={""} langage4={""} langage5={""} techno1={"NodeJs"} techno2={"FIGMA"} techno3={"SCSS"} techno4={""} techno5={""} competance1={"SCSS"} competance2={""} competance3={""} competance4={""} competance5={""} ameliorations1={"créer un DB pour les infos de tous les restaurants"} ameliorations2={"filtrage grace au input location"} ameliorations3={""} ameliorations4={""} ameliorations5={""}/>
							<label className="prev" htmlFor="checkbox-page2">
								<i className="fas fa-chevron-left"></i>
							</label>
						</div>
					</div>
					<div className="page" id="page3">
						<div className="front-page">
              <ProjetVisual  title={"OHMYFOOD"} imageAdresse={"./assets/ohmyfood.png"} linkInternet={"https://deltatreize.github.io/projet4/homePage.html"} linkGitHub={"https://github.com/deltaTreize/projet4"}/>
							<label className="next" htmlFor="checkbox-page3">
								<i className="fas fa-chevron-right"></i>
							</label>
						</div>
						<div className="back-page">
							<ProjetInfos
                description={"Premier projet de ma formation dans lequel j'utilise le langage JavaScript. Pour ce projet j'utilise une DataBase SQLITE (c'est pour ça que je ne peux pas utiliser vercel pour le lien du site). Cette DataBase ainsi que le Back-End était fourni, j'ai juste utilisé les routes pré-codées dans le Back-End."}
                nameProjet={"sophieBuel"} langage1={"HTML"} langage2={"CSS"} langage3={"JAVASCRIPT"} langage4={"YAML"} langage5={""} techno1={"NODEJS"} techno2={"EXPRESS"} techno3={"SQLITE"} techno4={"SWAGGER"} techno5={"FIGMA"} competance1={"YAML"} competance2={"SWAGGER"} competance3={"FETCH (JS)"} competance4={"création de modal"} competance5={""} ameliorations1={"rendre utilisable le formulaire de contact"} ameliorations2={""} ameliorations3={""} ameliorations4={""} ameliorations5={""}/>
							<label className="prev" htmlFor="checkbox-page3">
								<i className="fas fa-chevron-left"></i>
							</label>
						</div>
					</div>
					<div className="page" id="page4">
						<div className="front-page">
              <ProjetVisual  title={"SOPHIE BUEL"} imageAdresse={"./assets/sophieBuel.png"} linkInternet={""} linkGitHub={"https://github.com/deltaTreize/projet6?tab=readme-ov-file"}/>
							<label className="next" htmlFor="checkbox-page4">
								<i className="fas fa-chevron-right"></i>
							</label>
						</div>
						<div className="back-page">
							<ProjetInfos
                description={"Premier projet de ma formation dans lequel j'utilise REACT et première fois pour moi que j'utilise REACT-ROUTER. "}
                nameProjet={"KASA"} langage1={"HTML"} langage2={"SCSS"} langage3={"JS"} langage4={"JSX"} langage5={"JSON"} techno1={"REACT"} techno2={"REACT-ROUTER"} techno3={""} techno4={"FIGMA"} techno5={""} competance1={"L'utilisation de REACT-ROUTER"} competance2={""} competance3={""} competance4={""} competance5={""} ameliorations1={"mettre en place un système pour filtrer par localisation ou par tag"} ameliorations2={""} ameliorations3={""} ameliorations4={""} ameliorations5={""}/>
							<label className="prev" htmlFor="checkbox-page4">
								<i className="fas fa-chevron-left"></i>
							</label>
						</div>
					</div>
					<div className="page" id="page5">
						<div className="front-page">
              <ProjetVisual  title={"KASA"} imageAdresse={"./assets/kasa.png"}  linkInternet={"https://p8-kasa-umber.vercel.app/"} linkGitHub={"https://github.com/deltaTreize/p8_kasa"}/>
							<label className="next" htmlFor="checkbox-page5">
								<i className="fas fa-chevron-right"></i>
							</label>
						</div>
						<div className="back-page">
							<ProjetInfos
                description={"Ce projet a pour but de simuler une application bancaire. Ayant envie de pousser plus loin le projet, j'ai effectué beaucoup d'améliorations personnelles. Première fois que j'utilise REDUX, TYPESCRIPT, EXPRESS, MONGOOSE, REACT-MODAL."}
                nameProjet={"ARGENTBANK"} langage1={"HTML"} langage2={"SCSS"} langage3={"JS"} langage4={"TSX"} langage5={""} techno1={"REACT"} techno2={"REACT-MODAL"} techno3={"REDUX"} techno4={"EXPRESS"} techno5={"MONGOOSE"} competance1={"L'utilisation de REDUX est une grande première pour moi"} competance2={"J'ai commencer à apprendre TYPESCRIPT sur ce projet"} competance3={"Création de routes dans mon Back-End avec EXPRESS"} competance4={""} competance5={""} ameliorations1={""} ameliorations2={""} ameliorations3={""} ameliorations4={""} ameliorations5={""}/>
							<label className="prev" htmlFor="checkbox-page5">
								<i className="fas fa-chevron-left"></i>
							</label>
						</div>
					</div>
					<div className="page" id="page6">
						<div className="front-page">
              <ProjetVisual  title={"ARGENT BANK"} imageAdresse={"./assets/argentbank.png"}  linkInternet={""} linkGitHub={"https://github.com/deltaTreize/p11"}/>
							<label className="next" htmlFor="checkbox-page6">
								<i className="fas fa-chevron-right"></i>
							</label>
						</div>
						<div className="back-page">
							<ProjetInfos
                description={"Ce site est mon site personnel. J'ai commencé ce projet durant ma période d'apprentissage en autodidacte avant ma formation au sein de OpenClassroom. J'y apporte des améliorations régulièrement pendant mon temps libre."}
                nameProjet={""} langage1={"HTML"} langage2={"SCSS"} langage3={"JS"} langage4={"JSX"} langage5={"JSON"} techno1={"REACT"} techno2={"REACT-MODAL"} techno3={"REACT-ROUTER"} techno4={""} techno5={""} competance1={"Ce projet est mon premier projet REACT"} competance2={""} competance3={""} competance4={""} competance5={""} ameliorations1={""} ameliorations2={""} ameliorations3={""} ameliorations4={""} ameliorations5={""}/>
							<label className="prev" htmlFor="checkbox-page6">
								<i className="fas fa-chevron-left"></i>
							</label>
						</div>
					</div>
					<div className="page" id="page7">
						<div className="front-page">
              <ProjetVisual  title={""} imageAdresse={"./assets/harryPotter.png"}  linkInternet={"https://harry-potter-react-three.vercel.app/"} linkGitHub={""}/>
							<label className="next" htmlFor="checkbox-page7">
								<i className="fas fa-chevron-right"></i>
							</label>
						</div>
						<div className="back-page dernierePage">
							<p className="aurevoir1">J’espère que cette visite vous aura satisfait.</p>
							<p className="aurevoir2">N’hésitez pas à me contacter.</p>
							<p className="aurevoir3">A bientôt !</p>
							<label className="prev" htmlFor="checkbox-page7">
								<i className="fas fa-chevron-left"></i>
							</label>
						</div>
					</div>
					<div className="back-cover"></div>
				</div>
			</div>
		</div>
	);
}

export default Book;
