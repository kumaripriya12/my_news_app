import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';

import Detail from './Detail'

import 'react-responsive-carousel/lib/styles/carousel.min.css';

class MainNav extends Component {

	constructor() {
		super();
		this.state = {
			news_items_main: [],
			show_detail: false
		};

		this.fetchData = this.fetchData.bind(this);
	}

	componentDidMount() {
		this.fetchData()
    	setInterval(this.fetchData, 30000);
	}

	async fetchData(){
		try {
	      const res = await fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=3550598ea63546ec9c5fffbe8c56d531');
	      const news = await res.json();
	      const news_item_res = news.articles;

	      this.setState({
	        news_items_main: news_item_res
	      });

	      console.log(this.state);
        } catch(e) {
            console.log(e);
        }	
	}

	render () {

		if(!this.state.news_items_main.length)
			return null;

		let news_data = this.state.news_items_main.map((item, i) => (
            <Link to={{pathname: "/detail", state: item}} className='container nav navbar-nav mx-auto text-decoration-none text-dark' key={i}>
              <h5><strong>{item.title}</strong></h5>
              <div class="text-center">
              	<img className='img-fluid' src={item.urlToImage} alt={item.title} style={{width: 350+'px'}} height='250px'/>
              </div>
              <p>{item.description}</p>
            </Link>  
        ))

		return ( 
			<Carousel autoPlay infiniteLoop={true} showThumbs={false} showIndicators={false} >
	          {news_data}
	        </Carousel>
		)
	}
}


export default MainNav;