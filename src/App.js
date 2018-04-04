import React from 'react';
import Form from './Form';
import Resources from './Resources';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      isFetched: false,
      isLoading: false,
      error: null
    };

    this.getResourceItem = this.getResourceItem.bind(this);
  }

  componentDidMount() {
    fetch('/api/resources')
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error('HTTP error');
        }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          resources: data
        });
      })
      .catch(err => {
        this.setState({
          error: err.toString()
        });
      });
  }

  getResourceItem(resourceItem) {
    this.setState({
      resources: this.state.resources.concat(resourceItem)
    });
  }

  render() {
    return (
      <div>
        <div className='header row col-sm-12'>
          <div className='col-sm-8' >
            <h1>Resource Library</h1>
          </div>
          <div className='col-sm-4 pull-right'>
            <Search />
          </div>
        </div>
        <br />
        <div className='row' >
          <div className='col-sm-4' >
            <Form
              receiver={this.getResourceItem}
            />
          </div>
          <section className="main-wrapper col-sm-8">
            <div>
              <Resources resources={this.state.resources} />
            </div>
          </section>
        </div>

      </div>
    );
  };
};

export default App;
