import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'
import MainBody from './Components/MainBody'
import Category from './Components/Category'
import Detail from './Components/Detail'
import Video from './Components/Video'
import VideoMeet from './Components/VideoMeet'
import NotFound from './Components/NotFound'
import Footer from './Components/Footer'

function App() {

	return (
		<Router>
		<div className="App">
			<Header />

			<Switch>
				<Route exact path="/detail" component={Detail} />
				<Route exact path="/video" component={Video} />
				<Route exact path="/videomeet" component={VideoMeet} />
				<Route exact path="/:id" render={props => <Category key={props.match.params.id || 'empty'} id={props.match.params.id || 'empty'} /> } />
				<Route exact path="/" component={MainBody} />		
				<Route component={NotFound} />		
			</Switch>
		</div>
	</Router>
	);
}

export default App;
