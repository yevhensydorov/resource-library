import React from 'react';

class SearchResult extends React.Component {
  render(){
    const { snippet } = this.props.result;
    const { videoId } = this.props.result.id;
    const { description, title } = snippet;
    const { height, width, url } = this.props.result.snippet.thumbnails.default;
    return (
      <li
        className="result-item"
        onClick={ event => {
          this.props.playVideo(videoId)
        }}
      >
        <img
          className="result-img"
          src={url}
          height={height}
          width={width}
        />
        <div className="result-description">
          <div>
            <strong>{title}</strong>
          </div>
          {description}
        </div>
      </li>
    )
  }
};

export default SearchResult;
