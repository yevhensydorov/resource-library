import React, { Component } from "react";

class ResourceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.numberOfVotes,
      liked: false,
      error: null
    };
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    const { likes, liked } = this.state;
    const newLikesNumber = liked ? likes - 1 : likes + 1;
    this.setState({
      likes: newLikesNumber,
      liked: !liked
    });
    const votes = {
      id: this.props.id,
      votes: newLikesNumber
    }
    fetch('api/add-vote', {
      method: 'POST',
      body: JSON.stringify(votes),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .catch(err => {
        this.setState({ error: err })
      })
  }

  render() {
    const label = this.state.liked ? (
      <i className="fa fa-heart fa-2x red-heart" />
    ) : (
        <i className="fa fa-heart fa-2x" />
      );
    const { id, title, description, url, categories } = this.props;
    let categoriesArr = [];
    categories.map(category => {
      if (id === category.resource_id) {
        categoriesArr.push(category.category_name);
      }
    });
    let categoriesToDisplay = categoriesArr.map((cat, i) => {
      return (
        <a className="category-link" href={cat} key={i}>
          {cat}
        </a>
      );
    });
    return (
      <article className="resource-item">
        <div className="row">
          <a className='titles' href={url}>
            <h3>{title}</h3>
          </a>
        </div>
        <div className="row">
          <span className="category-label">Category: </span>
          {categoriesToDisplay}
        </div>
        <div className="row">
          <p>{description}</p>
        </div>
        <div className="row">
          <a className="heart-button" onClick={this.handleUpVote}>
            {label}
          </a>
          <h5>{this.state.likes} heart(s)</h5>
        </div>
        <br />
        <br />
      </article>
    );
  }
}

export default ResourceItem;
