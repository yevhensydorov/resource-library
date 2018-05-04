import React from "react";
import Form from "./Form";
import Resources from "./Resources";
import Search from "./Search";
import Header from './Header';

class Category extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      categories: [],
      isFetched: false,
      isLoading: false,
      search: "",
      error: null
    };

    this.getResourceItem = this.getResourceItem.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getCategoriesAndResourceId();
    this.getResources(this.state.category)
  }
  componentDidUpdate (prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      const category = this.props.match.params.category
      this.setState({ category })
      this.getResources(category)
    }
  }
  getResources() {
    fetch(`/api/categories/${this.props.match.params.category}`)
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

  getCategoriesAndResourceId() {
    fetch("/api/categories-and-resource-id")
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
          categories: data
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

  render() {
    const { search, resources, categories } = this.state;
    return (
      <div className="col-sm-12">
        <div className="header">
        <Header />
        </div>
        <br />
        <div className="row">
          <div className="col-sm-4">
            <Form receiver={this.getResourceItem} />
          </div>
          <div className="main-wrapper col-sm-8">
            <div className="row">
              <div className="col-sm-12">
                <Search
                  search={search}
                  handleSearch={this.handleSearch}
                  handleSubmit={this.handleSubmit}
                />
              </div>
              <div className="col-sm-12">
                <Resources
                  search={search}
                  resources={resources}
                  categories={categories}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Category;
