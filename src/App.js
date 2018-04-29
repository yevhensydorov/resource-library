import React from "react";
import Form from "./Form";
import Resources from "./Resources";
import ResourcesSortedAtoZ from "./ResourcesSortedAtoZ";
import Search from "./Search";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      isFetched: false,
      isLoading: false,
      search: "",
      error: null,
      isToggling: false,
      select: "popular"
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.getResourceItem = this.getResourceItem.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    fetch("/api/resources")
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("HTTP error");
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

  handleSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleOpen(state, select) {
    this.setState({
      isToggling: state,
      select: select
    });
  }
  render() {
    const { search, resources, select, isToggling } = this.state;
    const sort = isToggling && (select === "alphabetical") ? (
      <ResourcesSortedAtoZ
        selected={select}
        search={search}
        resources={resources}
      />
    ) : (
      <Resources
        selected={select}
        search={search}
        resources={resources}
      />
    )
    return (
      <div>
        <div className="header row col-sm-12">
          <div className="col-sm-8">
            <h1>Resource Library</h1>
          </div>
          <div className="col-sm-4 pull-right">
            <Search
              search={search}
              select={select}
              handleSearch={this.handleSearch}
              handleSubmit={this.handleSubmit}
              handleOpen={this.handleOpen}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-4">
            <Form receiver={this.getResourceItem} />
          </div>
          <section className="main-wrapper col-sm-8">
            <div>
              {sort}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
