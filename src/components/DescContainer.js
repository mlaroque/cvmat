import React, { Component } from 'react';
import Lacomuna from '../data/lacomuna';
import Lambdalogic from '../data/lambdalogic';
import Neoris from '../data/neoris';
import logo_comuna from '../assets/logo_comuna.jpeg';
import logo_lambdalogic from '../assets/logo_lambdalogic.png';
import logo_neoris from '../assets/neoris_logo.png';

class Project_HTML extends Component {

	constructor (props) {
		super(props);
	}


render () {

	const imgStyle = {
		width : this.props.widthImg
	}

	return (

	<>

		<div id={this.props.id} className="htmlContainer">
		<div className="htmlHeader">
			<div className="htmlLogo">
				<img src={this.props.logo}/>
			</div>
			<div className="htmlTitle">
				<p style={{fontSize: "30px"}}>{this.props.title}</p>
				{this.props.url !== "" &&
				<a href={this.props.url} target="_blank">Link to website</a>
				}
			</div>	
		</div>
		<div className="htmlBody">
			{this.props.children}
		</div>
		</div>
		
	</>
)
}


}

export default Project_HTML;