const MockRequest = require('../mock-request')

const fixture = {
  wow: true,
  awesome_array: [ 1, 2, 3 ]
}

const request = new MockRequest({
  method: 'POST',
  url: '/',
  headers: {
    'Content-Type': 'application/json'
  }
})

const run = () => {
  request.write(JSON.stringify(fixture))
  request.end()
}

module.exports = { request, fixture, run }
