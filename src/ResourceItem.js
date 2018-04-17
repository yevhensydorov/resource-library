import React, { Component } from "react";

class ResourceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.numberOfVotes,
      liked: false
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
        console.log(err);
      })
  }

  render() {
    const label = this.state.liked ? (
      <i className="fa fa-heart fa-2x red-heart" />
    ) : (
        <i className="fa fa-heart fa-2x" />
      );
    const { title, description, url } = this.props;
    return (
      <article className="resource-item">
        <div className="row">
          <a href={url}>
            <h3>{title}</h3>
          </a>
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
