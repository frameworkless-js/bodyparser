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

## File Uploads

File uploads will work out of the box, via multipart form parsing. The only thing you need to do is whitelist the types of files you want to upload. This can be done via one of two ways:

 1. *Environment variable (recommended):* set `ALLOWED_ATTACHMENT_MIMES` to a comma-separated list of files you want to whitelist, for example: `image/png,text/html`
 2. *Pass it in to the options argument:* by passing in a `fileTypes` option, you will be able to overwrite this per-request if you pass in an array of mime types. So your code might look like:

```js
const payload = await parseBody(request, { fileTypes: [ 'image/png', 'text/html' ] })
```

## Tests

```
npm run test
```

## Contributing

I would love your help! Please [make an issue](https://github.com/frameworkless-js/bodyparser/issues) or better yet [create a pull request](https://github.com/frameworkless-js/bodyparser/pulls) if you find a bug or missing feature!
