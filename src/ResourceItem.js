import React, { Component } from 'react';

class ResourceItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: 0,
			liked: false
		};
		this.liking = this.liking.bind(this);
	}

	liking() {
		const { likes, liked } = this.state
		const newLikesNumber = liked ? likes - 1 : likes + 1
		this.setState({
			likes: newLikesNumber,
			liked: !liked
		});
	};

	render() {
		const label = this.state.liked ? <i className="fa fa-heart fa-2x red-heart"></i> : <i className="fa fa-heart fa-2x"></i>
		const { title, description, url } = this.props;
		return (
			<article className='resource-item'>
				<div className='row'>
					<a href={url}><h3>{title}</h3></a>
				</div>
				<div className='row' >
					<p>{description}</p>
				</div>
				<div className='row' >
					<a className='heart-button' onClick={this.liking}>{label}</a>
					<h5>{this.state.likes} heart(s)</h5>
				</div>
				<br />
				<br />
			</article>
		);
	}
}

export default ResourceItem;
