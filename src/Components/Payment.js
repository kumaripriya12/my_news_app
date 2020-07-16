import React, { Component } from 'react';
import axios from 'axios';

class Payment extends Component {

	constructor(){
		super();

		this.state = {
			name : null,
			email : null,
			mobile : 0,
			order_id : null,
			razorpay_payment_id: null,
			razorpay_signature: null
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.verifySignature = this.verifySignature.bind(this);
		this.handleKeyStroke = this.handleKeyStroke.bind(this);
	}

	componentDidMount() {
	}

	onChange(e){
		this.setState({
			[e.target.name] : e.target.value
		});
	}

	handleKeyStroke(e){
		if(e.key == 'Enter'){
			this.handleSubmit(e);
		}
	}

	handleSubmit(event){ 
		event.preventDefault();

		let data = {
		    name: this.state.name,
		    email: this.state.email,
		    mobile: this.state.mobile
		  };

		let post_params = {'method':'generate_order_id'};
		const self = this;

    	axios({
			method: 'put',
			url: 'http://local.payment.com/payment.php',
			data: post_params,
			headers: { 
				'Content-Type' : 'application/json' 
			}
		})
		.then(function (response) {
		    console.log('order_id', response.data);
		    
		    if(response.data){
		    	let options = {
			      "key": "rzp_test_LHn6IGMKxS3889",
			      "amount": 100,
			      "name": "Merchant Priya",
			      "description": "Purchase Description",
			      "image": "",
			      "order_id": "order_F6LPHnEGyk9Oam", 
			      "handler": function (response){
			        alert(response.razorpay_payment_id);
			        alert(response.razorpay_signature);
			        self.setState({
			        	'razorpay_payment_id' : response.razorpay_payment_id,
			        	'razorpay_signature' : response.razorpay_signature
			        }, () => {
					    self.verifySignature();
					});
			      },
			      "prefill": {
			        "name": data.name,
			        "email": data.email,
			        "contact": data.mobile
			      },
					"notes": {
					    "address": "Razorpay Corporate Office"
					},
			      "theme": {
			        "color": "#F37254"
			      }
			    };

			    let rzp = new window.Razorpay(options);
			    rzp.open();
		    }

		})
		.catch(function (response) {
		    console.log(response);
		});
	}

	verifySignature(){
		const post_params = {
			'method' : 'verify_signature',
			'razorpay_payment_id' : this.state.razorpay_payment_id,
			'razorpay_signature' : this.state.razorpay_signature,
			'order_id' : this.state.order_id
		};

		axios({
			method: 'post',
			url: 'http://local.payment.com/payment.php',
			crossDomain: true,
			data: JSON.stringify(post_params),
			headers: { 
				'Content-Type' : 'application/json; charset=UTF-8' 
			}
		})
		.then(function (response) {
		    console.log('signature', response.data);
		})
		.catch(function (response) {
		    console.log(response);
		});
	}

	render(){

		return (
			<div className="container h-100">
				<div className="row h-100 justify-content-center align-items-center">
					<div className="col-sm-4">
						<form onSubmit={this.handleSubmit}>
						  <div className="form-group">
						    <label for="exampleInputName">Full Name</label>
						    <input type="name" className="form-control" name="name" aria-describedby="nameHelp" 
						    onChange={this.onChange} placeholder="Enter Full Name" />
						  </div>
						  <div className="form-group">
						    <label for="exampleInputEmail">Email</label>
						    <input type="email" className="form-control" name="email" onChange={this.onChange} placeholder="Enter Email" />
						  </div>
						  <div className="form-group">
						    <label for="exampleInputMobile">Mobile</label>
						    <input type="text" className="form-control" name="mobile" onChange={this.onChange} placeholder="Enter Mobile Number" />
						  </div>
						  <button type="submit" className="btn btn-primary" onKeyDown={this.handleKeyStroke}>Submit</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Payment;
