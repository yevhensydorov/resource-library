import React from "react";
import ResourceItem from "./ResourceItem";

class Resources extends React.Component {
  render() {
    const { resources, search, selected } = this.props;
    let query = search.toLowerCase();
    let filtered;
    if (selected == "alphabetical") {
      filtered = resources.sort(function(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    } else {
      filtered = resources.sort(
        (a, b) => b.num_of_votes - a.num_of_votes
      );
    }

    let filteredResources = filtered
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
        {filteredResources}
      </section>
    );
  }
}

export default Resources;
