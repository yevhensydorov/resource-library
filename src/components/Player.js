import React from 'react';


class Player extends React.Component {
  constructor(props){
    super(props);

    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
  }

  componentDidMount(){
    window.onYouTubeIframeAPIReady = function(){
      this.player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'xsSnOQynTHs',
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        }
      });
    }.bind(this);
  }

  onPlayerReady( event ){
    //event.target.playVideo();
  }

  onPlayerStateChange( event ){

  }

  playVideo( videoId ){
    player.loadVideoById( videoId );
  }

  render(){
    return (
      <div>
        <div id="player"></div>
      </div>
    );
  }
};

export default Player;
