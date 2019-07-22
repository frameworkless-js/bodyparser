const { createReadStream } = require('fs')
const FormData = require('form-data')

const MockRequest = require('../mock-request')

const fixture = {
  image: createReadStream('./test/fl_.png'),
  json: createReadStream('./package.json')
}

const form = new FormData()

const request = new MockRequest({
  method: 'POST',
  url: '/',
  headers: form.getHeaders()
})

const run = () => {
  for (const key of Object.keys(fixture)) {
    form.append(key, fixture[key])
  }

  form.pipe(request)
}

module.exports = { request, fixture, run }
