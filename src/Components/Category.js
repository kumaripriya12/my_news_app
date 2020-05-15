import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Category extends Component {

	constructor() {
		super();

		this.state = {
			api_url: 'http://newsapi.org/v2/everything?q=',
			api_key: '&apiKey=3550598ea63546ec9c5fffbe8c56d531',
			news_cat_items: [],
			api_param: ''
		};

		this.fetchAPIData = this.fetchAPIData.bind(this);
	}

	componentDidMount() {
		this.fetchAPIData()

	}

	fetchAPIData(){

		const api = this.state.api_url+this.props.id+this.state.api_key;

		fetch(api)
		.then(res => res.json())
		.then(
		(result) => {
		  this.setState({
		    news_cat_items: result.articles
		  });
		})		
	}

	render(){		

		if(!this.state.news_cat_items.length)
			return null;

		let news_data = this.state.news_cat_items.map((item, i) => (
			
	            <div className="row mb-4" key={i}>
					<div className="col">
						<img className="img-fluid img-thumbnail" src={item.urlToImage} alt={item.title} style={{width: 350+'px'}} height='250px' />
					</div>
					<div className="col text-left">
						<h6 className="font-weight-bold">{item.title}</h6>
						<p><small>{item.description}</small></p>
					</div>
				</div>  
			
        ))

		return (
			<div className="container">{news_data}</div>
		)
	}
}

export default Category;