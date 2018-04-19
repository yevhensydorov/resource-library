import React from "react";
import ResourceItem from "./ResourceItem";

class Resources extends React.Component {
  render() {
    const { resources, search } = this.props;
    let query = search.toLowerCase();
    const filteredResources = resources
      .sort((a, b) => b.num_of_votes - a.num_of_votes)
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
