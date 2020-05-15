import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  browserHistory
} from "react-router-dom";
import { withRouter } from 'react-router';
import createHistory from 'history/createBrowserHistory';

class Header extends Component {
	render () {
		return (
			
			<div className="container bg-red ">
				<nav className="nav nav-pills nav-fill text-capitalize text-bold">
					<Link to="/" className="nav-item nav-link">home</Link>
				    <Link to="/cricket" className="nav-item nav-link">cricket</Link>
					<Link to="/lifestyle" className="nav-item nav-link">lifestyle</Link>
					<Link to="/health" className="nav-item nav-link">health</Link>
					<Link to="/movies" className="nav-item nav-link">movies</Link>
					<Link to="/tech" className="nav-item nav-link">tech</Link>
					<Link to="/art" className="nav-item nav-link">art</Link>
					<Link to="/business" className="nav-item nav-link">business</Link>
					<Link to="/food" className="nav-item nav-link">food</Link>
					<Link to="/trends" className="nav-item nav-link">trends</Link>
					<Link to="/video" className="nav-item nav-link">video</Link>
				</nav>					
			</div> 		
			
		);
	}
}

export default withRouter(Header);