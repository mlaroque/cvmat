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

class Summary_HTML extends Component {

	constructor (props) {
		super(props);
	}


render () {


	return (

	<>
	{this.props.project === "lacomuna" 
		? 
		<div className="result" onClick={this.props.onClick}>
			<img src={logo_comuna} />
			<p>Professional > Lacomuna.mx >You will find <b>{this.props.sq}</b> there.</p>
		</div> 
		: this.props.project === "lambdalogic" 
		? 
		<div className="result" onClick={this.props.onClick}>
			<img style={{width:"200px",backgroundColor:"#555"}} src={logo_lambdalogic} /> 
			<p>Professional > Lambdalogic > You will find <b>{this.props.sq}</b> there.</p>
		</div>
		 : this.props.project === "neoris" 
		?
		<div className="result" onClick={this.props.onClick}>
			<img style={{width:"200px",backgroundColor:"#555"}} src={logo_neoris} /> 
			<p>Professional > Neoris >You will find <b>{this.props.sq}</b> there.</p>
		</div> : this.props.project === "utt" 
		?
		<div className="result" onClick={this.props.onClick}>
			<img style={{width:"200px",backgroundColor:"#555"}} src={logo_utt} /> 
			<p>Academic > You will find <b>{this.props.sq}</b> there.</p>
		</div> :this.props.project === "hobbies" 
		?
		<div className="result" onClick={this.props.onClick}>
			<img style={{width:"200px",backgroundColor:"#555"}} src={logo_globe} /> 
			<p>Hobbies >You will find <b>{this.props.sq}</b> there.</p>
		</div> : <p></p>
		

	}
	</>
)
}


}

export default Summary_HTML;