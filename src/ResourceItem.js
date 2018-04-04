import React, { Component } from 'react';

class ResourceItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: 0
		};
		this.Liking = this.Liking.bind(this);
	  }

	Liking() {
		this.setState({ likes: this.state.likes + 1 });
		// console.log(this.state.likes)
	  };

	render() {
		const {title, description, url} = this.props;
		return (
			<article className="resource-item">
				<div>
			 		<a href={url}><h3>{title}</h3></a>
				</div>
			 	<p>{description}</p>
				 <div className='row' >
				 <button className='like-button' onClick={this.Liking}><i className ="large material-icons">thumb_up</i></button>
				 <h3 style={{paddingLeft:'10px'}} >{this.state.likes} like(s)</h3> 
				 </div>
				<br />
				<br />
				
			</article>
		);
	}
}

export default ResourceItem;