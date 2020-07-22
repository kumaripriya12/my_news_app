import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'
import Video from './Components/Video'
import VideoMeet from './Components/VideoMeet'


function App() {

	return (
		<Router>
		<div className="App">
			<Header />

			<Switch>
				<Route exact path="/video" component={Video} />
				<Route exact path="/videomeet" component={VideoMeet} />
				
			</Switch>
		</div>
	</Router>
	);
}

export default App;
