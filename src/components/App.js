import React from 'react';
import Player from './Player';
import Search from './Search';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Player />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
