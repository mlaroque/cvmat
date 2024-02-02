import React, { Component } from 'react';
import PROJECTS from '../data/projects';

const Project = props => {

		const { title, image, description, link, github_link, it_skills, max_visits } = props.project;
		return (
			<div className="portfolio_project" >
				<h1>{title}</h1>
				<img src={image} alt='profile' style={{width:"100%"}}/>
				<p>Descriptionx: {description}</p>
				<p>Max visits per month: {max_visits}</p>
				<p>Link: <a href={link}>{link}</a></p>
				<p>Github: {github_link.includes('privado') ?
					github_link
					:
					<a href={github_link}>{github_link}</a>
				}</p>
				<p>Skills: <b>{it_skills}</b></p>
			</div>
		)
}

class Portfolio extends Component {

	constructor(props) {
		super(props);
	}

	render () {

		const backToHome = () => {
			this.props.togglePortfolio();
		}

		return(
			<div>
				<div>
					{
						PROJECTS.map(PROJECT => (
								<Project key={PROJECT.id} project={PROJECT} />
							)
						)
					}
				</div>
				<div className="desc-buttons">
			    	<button className="button" type="button" value="home" onClick={backToHome}>Back to CV</button>
			    </div>
			</div>
		)
	}

}

export default Portfolio;