const { encode } = require('querystring')

const MockRequest = require('../mock-request')

const fixture = {
  my_string_of_stuff: 'heellooooo'
}

const request = new MockRequest({
  method: 'POST',
  url: '/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

const run = () => {
  request.write(encode(fixture))
  request.end()
}

module.exports = { request, fixture, run }
