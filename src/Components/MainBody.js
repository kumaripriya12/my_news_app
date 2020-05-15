import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MainNav from './MainNav'
import BottomNav from './BottomNav'


class MainBody extends Component {

	constructor(){
		super();
		this.state = {
			show_main_nav: true,
			show_bottom_nav: true
		};

		this.handlePropUpdate = this.handlePropUpdate.bind(this);
	}

	handlePropUpdate(name, value){
		if(name == 'mainnav')
			this.setState({show_main_nav: value})

		else if(name == 'bottomnav')
			this.setState({show_bottom_nav: value})

	}

	render () {
		return ( 
			<div id='main_body'>
				{this.state.show_main_nav ? <MainNav showMainNav={this.state.show_main_nav} handler={this.handlePropUpdate}/> : null}
				{this.state.show_bottom_nav? <BottomNav showBottomNav={this.state.show_bottom_nav} handler={this.handlePropUpdate} /> : null}
			</div>
		)
	}
}

export default MainBody;