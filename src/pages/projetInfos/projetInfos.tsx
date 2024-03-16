import * as React from "react";

import "./projetInfos.scss";

export interface props {
	nameProjet: string;
	description: string;
  langage1: string;
  langage2: string;
  langage3: string;
  langage4: string;
  langage5: string;
  techno1: string;
  techno2: string;
  techno3: string;
  techno4: string;
  techno5: string;
  competance1: string;
  competance2: string;
  competance3: string;
  competance4: string;
  competance5: string;
  ameliorations1: string;
  ameliorations2: string;
  ameliorations3: string;
  ameliorations4: string;
  ameliorations5: string;
}

function ProjetInfos(props: props) {
	return (
		<div className="container-infos" key={props.nameProjet}>
			<h3>Decription du projet</h3>
			<p className="description">{props.description}</p>
      <div className="line"></div>
			<h3>Langages utilisés</h3>
			<ul>
        <li>{props.langage1}</li>
        <li>{props.langage2}</li>
        <li>{props.langage3}</li>
        <li>{props.langage4}</li>
        <li>{props.langage5}</li>
      </ul>
      <div className="line"></div>
			<h3>technos utilisées</h3>
			<ul>
        <li>{props.techno1}</li>
        <li>{props.techno2}</li>
        <li>{props.techno3}</li>
        <li>{props.techno4}</li>
        <li>{props.techno5}</li>
      </ul>
      <div className="line"></div>
			<h3>Compétences acquises durant ce projet</h3>
			<ul className="ulCompetances">
        <li>{props.competance1}</li>
        <li>{props.competance2}</li>
        <li>{props.competance3}</li>
        <li>{props.competance4}</li>
        <li>{props.competance5}</li>
      </ul>
      <div className="line"></div>
			<h3>Améliorations à venir</h3>
			<ul className="ulAmeliorations">
        <li>{props.ameliorations1}</li>
        <li>{props.ameliorations2}</li>
        <li>{props.ameliorations3}</li>
        <li>{props.ameliorations4}</li>
        <li>{props.ameliorations5}</li>
      </ul>
		</div>
	);
}

export default ProjetInfos;
