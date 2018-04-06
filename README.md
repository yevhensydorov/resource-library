# Resources Library

[![Build Status](https://travis-ci.org/yevhensydorov/resource-library.svg?branch=master)](https://travis-ci.org/yevhensydorov/resource-library)

## Getting Started

* This repo is frontend and backend
* It requires NODE
* This app is built with:
NODE.JS, 
REACT, 
POSTGRESQL

## Installing

Install project dependencies in the root directory:

```sh
npm install
```

Run project locally:

```sh
npm run dev -- --watch && node index.js
```

## Deployment

The following files are provided for build and deployment:

 - `.travis.yml`: tells [Travis CI] how to build the front end and trigger a [Cloud Foundry] (CF) deployment;
 - `.cfignore`: tells CF not to include things like `node_modules/` and the `README.md`, to save sending so many files over the network when deploying; and
 - `manifest.yml`: tells CF how to run the application.
 
Additionally a Postgres service will need to be bound to the application on CF to provide the `DATABASE_URL`; see e.g. https://docs.pivotal.io/partners/crunchy/using.html for details.
 
   [Cloud Foundry]: https://www.cloudfoundry.org/
   [Travis CI]: https://travis-ci.org/
