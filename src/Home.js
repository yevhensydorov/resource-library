import React from "react";
import Resources from "./Resources";
import Search from "./Search";
import Header from "./Header";
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      categories: [],
      categoriesList: [],
      isFetched: false,
      isLoading: false,
      search: "",
      error: null,
      select: "popular"
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.getCategoriesList = this.getCategoriesList.bind(this);
    this.getResourceItem = this.getResourceItem.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getCategoriesList();
    this.getResources();
    this.getCategoriesAndResourceId();
  }

  getCategoriesList() {
    fetch("/api/categories")
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(res => res.json())
      .then(catList => {
        catList.map(cat => {
          this.setState({
            categoriesList: [...this.state.categoriesList, cat.category_name]
          });
        });
      })
      .catch(err => {
        this.setState({
          error: err.toString()
        });
      });
  }

  getResources() {
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

  handleOpen(state, select) {
    this.setState({
      isToggling: state,
      select: select
    });
  }
  render() {
    const {
      search,
      resources,
      categoriesList,
      categories,
      select,
      isToggling
    } = this.state;
    const sortFunction =
      isToggling && select === "alphabetical"
        ? (a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          }
        : (a, b) => b.num_of_votes - a.num_of_votes;
    return (
      <div className="col-md-12">
        <div className="header">
          <Header receiver={this.getResourceItem} categories={categoriesList} />
        </div>
        <br />
        <div className="row col-sm-12">
          <div className="main-wrapper col-sm-8 col-sm-push-2">
            <div className="row">
              <div className="col-sm-12">
                <Search
                  select={select}
                  search={search}
                  handleSearch={this.handleSearch}
                  handleSubmit={this.handleSubmit}
                  handleOpen={this.handleOpen}
                />
              </div>
              <div className="col-sm-12">
                <Resources
                  selected={select}
                  search={search}
                  resources={resources}
                  categories={categories}
                  sortFunction={sortFunction}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
