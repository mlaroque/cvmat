import React, {Component} from 'react';
import { Player } from 'video-react';
import profile from '../assets/logoCV.jpeg';
import comuna from '../assets/lacomuna2.jpg';
import blank from '../assets/light_bg.jpg';
import utt from '../assets/utt.jpg';
import hobbies from '../assets/hobbies.jpg';
import portfolio from '../assets/suricata.jpg';
import linkedin from '../assets/linkedin_logo.jpeg';
import github from '../assets/github_logo.png';
import magnifier from '../assets/lupa.png';
import Ficha from './Ficha';
import "../../node_modules/video-react/dist/video-react.css";
import video1 from '../assets/test-video.mp4';
import video2 from '../assets/test-video2.mp4';
import Portfolio from './Portfolio';


const videos = {
	'default': video1,
	'academic' : video1,
	'professional': video2,
	'hobbies' : video2,
	'portfolio': video2
}

const headerImages = {
	'default': blank,
	'academic' : utt,
	'professional': comuna,
	'hobbies' : hobbies,
	'portfolio' : portfolio
}

class App extends Component {

	state = {
		section: 'default',
		imagePosition: 'center',
		headerImage: headerImages['default'],
		moveImageY: 'translateY(0px)',
		moveImageX:'translateY(0px)', 
		scaleImage: 'scale(1)',
		showDescription : false,
		showVideo: false,
		showMagnifier: true,
		showPortfolio: false
	};

	render() {

		const menuClick = (e) => {	
			this.setState({
				section: e.target.value,
				headerImage: headerImages[e.target.value],
				imagePosition : 'left',
				scaleImage: 'scale(0.4)', 
				moveImageX: 'translateX(-70%)', 
				moveImageY: 'translateY(-125px)'}); 
			if(!this.state.showDescription){
				this.setState({showDescription: true});
			}
			this.setState({showMagnifier: true});
			
		};	

		const portFolioClick = (e) => {
			this.setState({
				section: e.target.value,
				headerImage: headerImages[e.target.value],
				imagePosition : 'left',
				scaleImage: 'scale(0.4)', 
				moveImageX: 'translateX(-70%)', 
				moveImageY: 'translateY(-125px)'}); 
			if(!this.state.showPortfolio){
				this.setState({showPortfolio: true});
			}
			this.setState({showMagnifier: true});
		}

		const togglePortfolio = (x="0px",y="0px",scale=1,position='center') => {
			this.setState({
				imagePosition : 'center',
				headerImage: headerImages['default'],
				imagePosition: position,
				scaleImage: 'scale('+scale+')', 
				moveImageX: 'translateX('+x+')', 
				moveImageY: 'translateY('+y+')'});
			this.setState({showPortfolio: !this.state.showPortfolio});
			this.setState({showMagnifier: true});
		}

		const toggleDesc = (x="0px",y="0px",scale=1,position='center') => {
			this.setState({
				imagePosition : 'center',
				headerImage: headerImages['default'],
				imagePosition: position,
				scaleImage: 'scale('+scale+')', 
				moveImageX: 'translateX('+x+')', 
				moveImageY: 'translateY('+y+')'});
			this.setState({showDescription: !this.state.showDescription});
			this.setState({showMagnifier: true});
		}

		const backWithImage = () => {
			if(this.state.showDescription){
				toggleDesc();
			}
		}

		const searchIcon = (x,y,scale,position,section) => {
			toggleDesc(x,y,scale,position);
			this.setState({
				showMagnifier: !this.state.showMagnifier,
				showDescription: true,
				section: section,
				showPortfolio: false
			});
		}

		const showVideoFn = (e) => {
			this.setState({showVideo: !this.state.showVideo});
		}

		const imageStyle = {
			textAlign: this.state.imagePosition,
			transform: `${this.state.scaleImage} ${this.state.moveImageX} ${this.state.moveImageY}`,
			cursor: `${this.state.showDescription ? "pointer" : "auto"}`
		}

		const headerStyle = {
			backgroundImage: `url(${this.state.headerImage})`,
			backgroundSize: 'cover'
		}

		const setSection = (sec) => {
			this.setState({section: sec});
			this.setState({headerImage: headerImages[sec]});
			this.setState({showMagnifier: true});
			
		}

		return (
			<div className="main">
			{!this.state.showVideo &&
			<div className="profile-container">
			<div className="header-container" style={headerStyle}>
			<div className='socialPic'>
				<a href="https://www.linkedin.com/in/mathieu-laroque-malbert-b3289411/" target="_blank"><img src={linkedin} /></a>
				<a href="https://github.com/mlaroque/cvmat" target="_blank"><img src={github} /></a>
				{this.state.showMagnifier && 
					<img src={magnifier} onClick={() => {searchIcon("-70%","-125px",0.4,'left','search')}}/>
				}
			</div>
			<div id="xx" className="image-container" style={imageStyle} onClick={backWithImage}>
			    <img id="profile-image" src={profile} alt="Profile Image" className="profile-image" />
				{!this.state.showDescription &&
				<>
					<h1>Mathieu Laroque-Malbert</h1>
					<p>Full-stack engineer</p>
					</>
				}
			</div>
			</div>
				<div>
			    
			    <Ficha 
			    	toggleDesc={toggleDesc}
			    	showVid={showVideoFn} 
			    	section={this.state.section} 
			    	showDescription={this.state.showDescription} 
			    	setSection={setSection}
			    />

			    {this.state.showPortfolio && this.state.showMagnifier && <Portfolio togglePortfolio={togglePortfolio}/>}
			    
			    
			    </div>
			    {!this.state.showDescription && this.state.showMagnifier && !this.state.showPortfolio &&
			    <div className="profile-buttons">
			      	<button className="button" type="button" onClick={menuClick} value="academic">Academic Carreer</button>
					<button className="button" type="button" onClick={menuClick} value="professional">Professional Carreer</button>
					<button className="button" type="button" onClick={menuClick} value="hobbies">Hobbies and Interests</button>
			   		<button className="button" type="button" onClick={portFolioClick} value="portfolio">Portfolio</button>
			    </div>
				}

			 </div>
			}
			 {this.state.showVideo && 
			 <div className="video">
			  <Player
		      playsInline
		      poster="../assets/poster.png"
		      src={videos[this.state.section]}
		    />
			 	<button className="button" type="button" value="video" onClick={showVideoFn}>Close Video</button>
			 </div>
			}
			 </div>
		);
	}
}

export default App;