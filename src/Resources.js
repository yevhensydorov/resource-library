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
      <section className='resources'>
      <div className='row' >
        <h2 className='pull-left' >Resources</h2>
      </div>
      <br />
      <div>      
        {resourcesComponentsArray}
      </div>
      </section>
    );
  }
}

export default Resources;
