import React, {Component} from 'react';
import Description from './Description';
import parse from 'html-react-parser';
import logo_comuna from '../assets/logo_comuna.jpeg';
import logo_lambdalogic from '../assets/logo_lambdalogic.png';
import logo_neoris from '../assets/neoris_logo.png';

const keypoints = {
	default: ["	"],
	academic: [
		"<b>1999-2005</b> - Informations Systems Engineer at the University of Technology (UTT)",
		"<b>2004</b> - Internship as a C# Programmer at Parexel GmbH in Berlin (Germany)",
		"<b>2005</b> - Internship as a Java Programmer at Neoris in Madrid (Spain)"],
	professional: [
		"Expertise in Javascript, PHP, WordPress, API integrations, C# and Java.",
		"Proven ability to manage teams, foster collaboration, and deliver successful projects.",
		"Co-founded and managed a virtual agency, LaComuna, and held IT Consultant roles at LambdaLogic and NEORIS."],
	hobbies: ["<b>Globetrotter Dad</b>: Explored diverse cultures through 4 worldwide journeys, now raising active daughters (coaching tennis!).",
			  "<b>Sports Fanatic</b>: Passionate about various sports, from graceful tennis to thrilling rugby, enjoys watching with family.",
			  "<b>Food Enthusiast</b>: French heritage inspires love for good food, cherishes shared meals and the joy of cooking."],
	search: '',
	portfolio: ''
}

class Ficha extends Component {

	constructor(props) {
		super(props);
	}

	state = {
			showMore: false
	};

	render () {

		const showMoreFn = () => {
			this.setState({showMore: !this.state.showMore});
		};	

		const backToHome = () => {
			this.setState({showMore: false});
			this.props.toggleDesc();
		}

		return (
			<div className="divBottom" style={{ display: `${this.props.showDescription ? 'block' : 'none'}`}}>
			    {keypoints[this.props.section].length > 0 && 
			    	<ul className='cool-bullets'>
			    	{keypoints[this.props.section].map((bullet,index) => (
			    			<li key={index}>{parse(bullet)}</li>
			    		))}
			    	</ul>
			    }
			    {
			    		(this.state.showMore || this.props.section === 'search') && 
			    		<Description 
			    		section={this.props.section} 
			    		setSection={this.props.setSection} />
			    }
			    	<div className="desc-buttons">
			    		{this.props.section !== 'search' &&
			    		<>
			    		<button className="button" type="button" value="more" onClick={showMoreFn}>{this.state.showMore ? 'Less' : 'More'}</button>
						{/*<button className="button" type="button" value="video" onClick={this.props.showVid}>Video</button>*/}
			    		</>
			    		}
			    		<button className="button" type="button" value="home" onClick={backToHome}>Back to CV</button>
			    	</div>
			</div>
		);

	}

}

export default Ficha;