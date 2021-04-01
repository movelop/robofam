import React, {Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox.js';
import './App.css';
import Scroll from '../component/Scroll';


class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ""
		}
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => this.setState({robots: users}))
		
	}


	onSearchChange =(event) =>{
		this.setState({searchfield: event.target.value });
		
	}
	render(){
		const {robots, searchfield} = this.state;
		const filterRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
			return !robots.length?
			 <h1 className="tc">Loading...</h1> :
			 (
					<div className='tc'>
						<h1 className="f1">RoboFam</h1>
						<SearchBox searchChange={this.onSearchChange} />
						<Scroll>
						<CardList robots={filterRobots}/>
						</Scroll>	
					</div>
				
			);
		
	}
	
}




export default App;