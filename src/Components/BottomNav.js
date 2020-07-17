import React, { Component } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

class BottomNav extends Component {

	constructor() {
		super();

		const api_params = [
		  {id: 1, title: 'India news', url: 'https://newsapi.org/v2/top-headlines?country=in&apiKey=3550598ea63546ec9c5fffbe8c56d531'},
		  {id: 2, title: 'tech news', url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3550598ea63546ec9c5fffbe8c56d531'},
		  {id: 3, title: 'India business news', url: 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3550598ea63546ec9c5fffbe8c56d531'},
		  {id: 4, title: 'apple release news', url: 'https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=3550598ea63546ec9c5fffbe8c56d531'},
		];

		this.state = {
			api_params: api_params,
			news_result: [],
			news_length: 2,
			see_all_news: false,
			news_index: null
		};

		this.fetchAPIData = this.fetchAPIData.bind(this);
	}

	componentDidMount() {
		console.log('prop--', this.props.showBottomNav);
		// let api_result = [];
		this.fetchAPIData()

	  }

	fetchAPIData(){

		const news_params = this.state.news_result.slice();

		this.state.api_params.map((items) =>
			fetch(items.url)
	    	.then(res => res.json())
	      	.then(
		        (result) => {
		        	//console.log(result.articles);
		        	let news_result_item = [
		        	{'title': items.title, 
		        	'news_items': result.articles}
		        	];
		        	news_params.push(news_result_item);
		        	this.setState({
						news_result: news_params
					});
		        }
	    	)
		) 		
	}

	seeall(title_index){
		this.setState({ news_index : title_index });
		this.props.handler('mainnav', false);
	}

	render () {

		let news_line_items = null;
			
		if(this.state.news_index != null){
			//news_line_items = 'Hello See All';
			const news_arr = this.state.news_result[this.state.news_index][0];
			
			news_line_items = Object.values(news_arr.news_items).map((news_category_items, category_index) => {
				return (
					<div className="row mb-4" key={category_index}>
						<div className="col">
							<img className="img-fluid img-thumbnail" src={news_category_items.urlToImage} alt={news_category_items.title} style={{width: 350+'px'}} height='250px' />
						</div>
						<div className="col text-left">
							<h6 className="font-weight-bold">{news_category_items.title}</h6>
							<p><small>{news_category_items.description}</small></p>
						</div>
					</div>
				)
			})
		}

		else {
			if(this.state.news_result.length !== 4)
				return null;

			let news_items_articles = [];
			news_line_items = this.state.news_result.map((items, index) => (
				<div className="container text-left">
					<div className="row justify-content-between">
						<h2 className="font-weight-bold text-capitalize">{items[0].title.substring(0,50)}</h2>
						<span className="font-weight-bold">_________________________________________________________________________________________</span>
						<p className="pr-4 font-weight-bold" onClick={this.seeall.bind(this, index)}>see all</p>
					</div>
					<div className="row">	
					{
						Object.values(items[0].news_items).map((news_category_items, category_index) => { 
							let news_content = news_category_items.description;
							if(news_content == null || news_content == undefined || news_content.length < 200){
								news_content = news_category_items.title;
							}
							if(category_index < 5) {
								return (								
									<div className="col" style={{paddingLeft: 0+'px'}} key={news_category_items.title}>
										<img style={{width: 200+'px'}} height='150px' src={news_category_items.urlToImage} alt={news_category_items.title} />
										<h6 className="font-weight-bold">{news_category_items.title}</h6>
										<p><small>{news_content.substring(0,200)}</small></p>
									</div>
								)
							}
						})
					}
					</div>
				</div>
			))	
		}

		return (
			<div className="container">{news_line_items}</div>
		)
	}
}


export default BottomNav;