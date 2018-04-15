import React, { Component } from "react";

class ResourceItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.numberOfVotes
    };
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    const votes = { votes: this.state.likes + 1 };

    this.setState({ likes: this.state.likes + 1 });
    // console.log(votes);
    fetch("/api/add-vote", {
      method: "POST",
      body: JSON.stringify(votes),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(body => {
        console.log(body);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { title, description, url } = this.props;
    return (
      <article className="resource-item">
        <div>
          <a href={url}>
            <h3>{title}</h3>
          </a>
        </div>
        <p>{description}</p>
        <div className="row">
          <button className="like-button" onClick={this.handleUpVote}>
            <i className="large material-icons">thumb_up</i>
          </button>
          <h3 style={{ paddingLeft: "10px" }}>{this.state.likes} like(s)</h3>
        </div>
        <br />
        <br />
      </article>
    );
  }
}

export default ResourceItem;
