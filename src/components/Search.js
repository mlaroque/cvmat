import React, { Component } from 'react';
import description_json from '../data/description.json';
import Summary_HTML from './Summary_HTML';

class Search extends Component {

	constructor (props) {
		super(props);
	} 

	state = {
		showList: false,
		descJson: description_json,
		searchList: Array(),
		searchListFiltered: Array(),
		searchResults: Array(),
		cursor: -1,
		resultSelected: false,
		wordSearched: ''
	};

	componentDidMount () {
		const searchListInit = this.state.descJson.map((desc,index) => {
			return desc.keywords;
		});
		console.log(searchListInit);
		const uniqueValues = searchListInit.flat().filter((val,id,array) => {
			return array.indexOf(val) == id;
		});

		this.setState({searchList: uniqueValues});
	}

	render () {

		const searchInJson = (e) => {

			const filteredValues = this.state.searchList.filter((val,id) => {
				return val.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
			});
			this.setState({searchListFiltered: filteredValues});
			if(e.target.value !== ""){
				this.setState({showList: true});
			}else{
				this.setState({showList: false});
				this.setState({searchResults: Array()});
			}
		}

		const cursorList = (e) => {
			if(e.target.value === ""){
				this.setState({cursor: -1});
			}
			this.setState({resultSelected: false});
			if(e.keyCode == 40 && this.state.searchListFiltered.length-1 > this.state.cursor){ 
				this.setState({cursor: this.state.cursor + 1});
			}else if(e.keyCode == 38 && this.state.cursor > 0){
				this.setState({cursor: this.state.cursor -1});
			}else if(e.keyCode == 13){
				search();

			}
		}

		const elementListStyle = {
			backgroundColor : '#ffff99'
		}

		console.log(this.state.cursor);


		const search = (sq=this.state.searchListFiltered[this.state.cursor]) => {
				const arrResults = this.state.descJson.filter((el, index) => {
					if (el.keywords.includes(sq)){
						return el;
					}
				});

				this.setState({searchResults: arrResults});
				this.setState({resultSelected: true});
				this.setState({cursor: -1});
				this.setState({wordSearched: sq});
		}

		console.log(this.state.wordSearched);

		const searchFromMouse = (selec) => {
			search(selec);
		}

		const clickResult = (section) => {
			this.props.setSection(section);
		}

		return (
			<>
			<div className="search-container">
				<input type="text" className="search-input" onChange={searchInJson} onKeyDown={cursorList}/>
				{this.state.showList && !this.state.resultSelected &&
				<div className="predictions-container">
					<ul className="predictions-list">
						{
							this.state.searchListFiltered.map((el,index) => (
								<>
								{index === this.state.cursor ?
									<li key={el.id} style={elementListStyle} onClick={() => {searchFromMouse(el)}}>{el}</li>
								:
									<li key={el.id} onClick={() => {searchFromMouse(el)}}>{el}</li>
								}
								</>
								)
							)
						}
					</ul>
				</div>
				}
				</div>

			<div className="results-container">
				{this.state.searchResults.length > 0 && this.state.showList && 
					this.state.searchResults.map((result, index) => {
						return <Summary_HTML sq={this.state.wordSearched} project={result.html} onClick={() => {this.props.setSection(result.section)}}/>
					})
				}
			</div>
			
			</>
		)
	}

}

export default Search;