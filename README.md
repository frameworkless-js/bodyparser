# `@frameworkless/bodyparser`

The easiest to use body parser for Node.js applications. Works with any content type, and comes standard with a few useful ones.

This module comes from the output of the [Frameworkless.js] online course.

## Installing

```
npm i --save @frameworkless/bodyparser
```

## Quick Start

Here's the quick, simple usage with the Node's built in HTTP server:

```js
const { createServer } = require('http')
const { parseBody } = require('@frameworkless/bodyparser')

const requestHandler = async (request, response) => {
  const payload = await parseBody(request)
  return response.end(payload)
}

const server = createServer(requestHandler)

server.listen(1234)
```

## Tests

```
npm run test
```

## Contributing

I would love your help! Please [make an issue](https://github.com/frameworkless-js/bodyparser/issues) or better yet [create a pull request](https://github.com/frameworkless-js/bodyparser/pulls) if you find a bug or missing feature!
