function search(query) {
  return fetch(`https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&type=video&key=AIzaSyDVPb-EbsD1R0TvrQ1DKf1bIOMYcEuQvtM`)
    .then( response => response.json() )
    .then( json => json );
}

export default search;
