import React from 'react';
import ResourceItem from './ResourceItem';

class Resources extends React.Component {
  render() {
    const { resources } = this.props;
    const filteredResources = resources.filter(Title =>
      Title.title.toLowerCase().includes(this.props.search)
    );
    let resourcesComponentsArray = filteredResources.map(
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
