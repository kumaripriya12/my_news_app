import React, { Component } from 'react';

class VideoMeet extends Component {

	constructor(){
		super();

		this.state = {
			showButton : true
		};

		this.handleMeet = this.handleMeet.bind(this);
	}

	handleMeet(event){
	
	    const domain = 'try.clanmeeting.com';
		const options = {
		    roomName: 'MyMeetingRoom',
		    width: 700,
		    height: 700,
		    parentNode: document.querySelector('#video_meet_container')
		};
		
		const api = new window.ClanMeetingAPI(domain, options);

		try{
			api.addEventListener('videoConferenceJoined', () => {
				console.log('Local User Joined');
				api.executeCommand('displayName', 'MyName');
			});
			this.setState({
				showButton : false
			});
		} catch (error) {
			console.error('Failed to load Clan API', error);
		}
	}

	render(){
		return (
			<div className="container pt-5">
				<div id="video_meet_container">
					
				</div>
				{ this.state.showButton ?
					<button onClick={this.handleMeet}>Start Meeting</button>
					: null
				}
				
			</div>
		)
	}
}

export default VideoMeet;
