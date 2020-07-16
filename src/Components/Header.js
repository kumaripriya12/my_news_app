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
					<Link to="/" className="nav-item nav-link" accesskey="a">home</Link>
				    <Link to="/cricket" className="nav-item nav-link" accesskey="b">cricket</Link>
					<Link to="/lifestyle" className="nav-item nav-link" accesskey="c">lifestyle</Link>
					<Link to="/health" className="nav-item nav-link" accesskey="l">health</Link>
					<Link to="/movies" className="nav-item nav-link" accesskey="m">movies</Link>
					<Link to="/tech" className="nav-item nav-link" accesskey="n">tech</Link>
					<Link to="/art" className="nav-item nav-link" accesskey="g">art</Link>
					<Link to="/business" className="nav-item nav-link" accesskey="h">business</Link>
					<Link to="/food" className="nav-item nav-link" accesskey="i">food</Link>
					<Link to="/trends" className="nav-item nav-link" accesskey="j">trends</Link>
					<Link to="/video" className="nav-item nav-link" accesskey="k">video</Link>
					<Link to="/videomeet" className="nav-item nav-link">video meet</Link>
				</nav>					
			</div> 		
			
		);
	}
}

export default withRouter(Header);