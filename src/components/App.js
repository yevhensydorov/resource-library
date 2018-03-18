import React from 'react';
import Player from './Player';
import Search from './Search';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      videoId: 'xsSnOQynTHs'
    };

    this.playVideo = this.playVideo.bind(this);
  }

  playVideo(videoId){
    this.setState({
      videoId: videoId
    });
  }

  render(){
    return (
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Player videoId={this.state.videoId} />
        </div>
        <div className="col-6 offset-3 d-flex justify-content-center">
          <Search playVideo={this.playVideo} />
        </div>
      </div>
    );
  }
}

export default App;
