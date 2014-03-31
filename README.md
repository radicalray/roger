roger
=====

Sample angular.js + node.js application

## Prerequisites

* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - If you plan on scaffolding your project with mongoose, you'll need mongoDB to be installed.

## Demo

[Click Here](http://rogerangular.herokuapp.com/)

## Getting Started

Install Dependencies

```bash
npm install && bower install
```

Launch your express server in development mode.
```bash
grunt serve
```

Launch your express server in `debug-brk` mode with a node-inspector tab.
```bash
grunt serve:debug
``` 

Launch your express server in production mode, uses the minified/optimized production folder.
```bash
grunt serve:dist
``` 

### Livereload

`grunt serve` will watch client files in `app/`, and server files inside `lib/`, restarting the Express server when a change is detected.

## Deployment

To generate a dist folder that can easily be deployed use:

```bash
grunt
```

This will run unit tests, jshint, concatenate and minify scripts/css, compress images, add css vendor prefixes, and finally copy all files to a tidy dist folder.

Alternatively to skip tests and jshint, use:

```bash
grunt build
```