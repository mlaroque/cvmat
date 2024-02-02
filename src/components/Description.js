import React, { Component } from 'react';
import description_json from '../data/description.json';
import Project_HTML from './Project_HTML';
import Search from './Search';

class Description extends Component {

	constructor (props) {
		super(props);
	} 


	render () {
		return (

			<div className="description">
				{this.props.section !== 'search' ? 
				
				description_json.map((desc, index) => { 
					return (
						<>
						{desc.section === this.props.section && 
						<Project_HTML project={desc.html}/>
						}
						</>
					)
				}) : <>
					<Search setSection={this.props.setSection}	/>
					</>

			} 
			</div>
		)
	}

}

export default Description;