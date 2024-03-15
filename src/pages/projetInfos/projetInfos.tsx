import * as React from "react";

import "./projetInfos.scss";

export interface props {
	nameProjet: string;
	description: string;
  language1: string;
  language2: string;
  language3: string;
  language4: string;
  language5: string;
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
			<h3>Décription du projet</h3>
			<p className="description">{props.description}</p>
			<h3>Languages utilisés</h3>
			<ul>
        <li>{props.language1}</li>
        <li>{props.language2}</li>
        <li>{props.language3}</li>
        <li>{props.language4}</li>
        <li>{props.language5}</li>
      </ul>
			<h3>technos utilisés</h3>
			<ul>
        <li>{props.techno1}</li>
        <li>{props.techno2}</li>
        <li>{props.techno3}</li>
        <li>{props.techno4}</li>
        <li>{props.techno5}</li>
      </ul>
			<h3>Compétances aquises durant ce projet</h3>
			<ul>
        <li>{props.competance1}</li>
        <li>{props.competance2}</li>
        <li>{props.competance3}</li>
        <li>{props.competance4}</li>
        <li>{props.competance5}</li>
      </ul>
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
