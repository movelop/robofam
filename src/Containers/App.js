import React, { useState,useEffect} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox.js';
import './App.css';
import Scroll from '../component/Scroll';


const App = () => {
	

const [robots, setRobots] = useState([]);
const [searchfield, setSearchfield] = useState('');


useEffect(()=>{
	fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => {setRobots( users)});
		console.log();
}, []) 

	const onSearchChange =(event) =>{
		setSearchfield( event.target.value );
		
	}
		const filterRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
			return !robots.length?
			 <h1 className="tc">Loading...</h1> :
			 (
					<div className='tc'>
						<h1 className="f1">RoboFam</h1>
						<SearchBox searchChange={onSearchChange} />
						<Scroll>
						<CardList robots={filterRobots}/>
						</Scroll>	
					</div>
				
			);
		
	}




export default App;