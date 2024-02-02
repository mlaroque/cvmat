import React, { Component } from 'react';
import Lacomuna from '../data/lacomuna';
import Utt from '../data/utt';
import Hobbies from '../data/hobbies';
import Lambdalogic from '../data/lambdalogic';
import Neoris from '../data/neoris';
import logo_comuna from '../assets/logo_comuna.jpeg';
import logo_lambdalogic from '../assets/logo_lambdalogic.png';
import logo_neoris from '../assets/neoris_logo.png';
import logo_utt from '../assets/utt_logo.svg';
import logo_globe from '../assets/globe_logo.png';
import DescContainer from './DescContainer';


class Project_HTML extends Component {

	constructor (props) {
		super(props);
	}


render () {

	return (

	<>
	{this.props.project === "lacomuna" 
		?
		<> 
		<DescContainer
			id="lacomuna"
			logo={logo_comuna}
			title="Lacomuna.mx"
			url="https://lacomuna.mx"
		>
			<Lacomuna />
		</DescContainer>
		</>
		: this.props.project === "lambdalogic" 
		? 
		<> 
		<DescContainer
			id="lambdalogic"
			logo={logo_lambdalogic}
			title="Lambdalogic GmbH"
			url="https://www.lambdalogic.de/en/company/"
		>
			<Lambdalogic />
		</DescContainer>
		</> 
		: this.props.project === "neoris" 
		?
		<DescContainer
			id="neoris"
			logo={logo_neoris}
			title="Neoris"
			url="https://neoris.com/"
		>
			<Neoris />
		</DescContainer>
		: this.props.project === "utt" 
		?
		<DescContainer
			id="utt"
			logo={logo_utt}
			title="Université de Technologie de Troyes"
			url="https://www.linkedin.com/school/universit%C3%A9-de-technologie-de-troyes/"
		>
			<Utt />
		</DescContainer> : this.props.project === "hobbies" 
		?
		<DescContainer
			id="hobbies"
			logo={logo_globe}
			title="Hobbies"
			url=""
		>
			<Hobbies />
		</DescContainer> :<p></p>
		

	}
	</>
)
}


}

export default Project_HTML;