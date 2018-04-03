Node Starter 
=======================
[![Build Status](https://travis-ci.org/alvinio/node-starter)](https://travis-ci.org/alvinio/node-starter#)

A boilerplate starter template for **Node.js** web applications.

## Development

You will need to install `Yarn` for global dependency management. Visit https://yarnpkg.com/en/ for more details.

This project uses Docker and Docker Compose to standardise development environments.
Visit https://www.docker.com/ for more details.

This project uses editorconfig to standardise text editor configuration.
Visit http://editorconfig.org for more details.

This projects also uses ESLint to detect suspicious code in JavaScript.
Visit https://eslint.org for more details.

Environment variables are set up using `dotenv`.


### Running Instructions:

```
$ docker-compose up -d
$ cp .env.example .env # + adjust as necessary
$ yarn && yarn start
```

### Running Linter + Tests:

```
$ yarn lint
$ yarn test
```
