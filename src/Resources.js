import React from "react";
import ResourceItem from "./ResourceItem";

class Resources extends React.Component {
  render() {
    const { resources, search } = this.props;
    let query = search.toLowerCase();
    const filteredResources = resources.filter(
      ({ title, description }) =>
        title.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query)
    );
    const resourcesComponentsArray = filteredResources.map(
      (resourceInfo, index) => {
        return (
          <ResourceItem
            key={index}
            title={resourceInfo.title}
            description={resourceInfo.description}
            url={resourceInfo.url}
          />
        );
      }
    );

    return (
      <section className="resources">
        <h2>Resources</h2>
        {resourcesComponentsArray}
      </section>
    );
  }
}

export default Resources;
