import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Detail extends Component {

	render () { 

		const item_detail = this.props.location.state;
		console.log(item_detail);

		if(!item_detail)
			return null;
		
		return (
			<div className="row mb-4">
				<div className="col">
					<img className="img-fluid img-thumbnail" src={item_detail.urlToImage} alt={item_detail.title} style={{width: 350+'px'}} height='250px' />
					<p>Source: {item_detail.source.name}</p>
				</div>
				<div className="col text-left">
					<h6 className="font-weight-bold">{item_detail.title}</h6>
					<p><small>{item_detail.content}</small></p>
					<p>Author: {item_detail.author}</p>
				</div>
			</div> 
		)
	}
}

export default Detail;