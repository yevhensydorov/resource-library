import React from 'react';

class ResourceItem extends React.Component {
	render() {
		const {title, description, url} = this.props;
		return (
			<article className="resource-item">
				<h3>{title}</h3>
				<p>{description}</p>
				<a className='btn' href={url}>Go</a>
			</article>
		);
	}
}

export default ResourceItem;