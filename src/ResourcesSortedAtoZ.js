import React from "react";
import ResourceItem from "./ResourceItem";

class Resources1 extends React.Component {
  render() {
    const { resources, search, } = this.props;
    let query = search.toLowerCase();
        let sorted = resources.sort(function(a, b) {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0})
      .filter(
        ({ title, description }) =>
          title.toLowerCase().includes(query) ||
          description.toLowerCase().includes(query)
      )
      .map((resourceInfo, index) => (
        <ResourceItem
          key={index}
          id={resourceInfo.id}
          title={resourceInfo.title}
          description={resourceInfo.description}
          url={resourceInfo.url}
          numberOfVotes={resourceInfo.num_of_votes}
        />
      ));
    return (
      <section className="resources">
        <h2>Resources</h2>
        {sorted}
      </section>
    );
  }
}

export default Resources1;
