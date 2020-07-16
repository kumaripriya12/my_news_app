import React, { Component } from 'react';

import Payment from './Payment'

class Video extends Component {

	constructor(){
		super();

		this.state = {
			showPayment : false
		};

		this.payNowClick = this.payNowClick.bind(this);
	}

	payNowClick(){
		this.setState({
			showPayment : true
		});
	}

	render(){

		if(this.state.showPayment){
			return <Payment />
		}

		return (
			<div>
				<video width="450" height="300" poster="/images/bhuj.png" controls >
					<source src="/Videos/Video2.mp4" type="video/mp4"/>
				</video>
				<br />
				<button className="btn btn-primary" type="button" onClick={this.payNowClick}>Pay Now</button>
			</div>
		)
	}
}

export default Video;
