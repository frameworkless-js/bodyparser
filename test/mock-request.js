const { PassThrough } = require('stream')

module.exports = class MockRequest extends PassThrough {

  constructor(options) {
    super()

    this.headers = {}
    this.rawHeaders = []

    this.method = options.method || 'GET'
    this.url = options.url

    Object.keys(options.headers).map(header => {
      const key = header.toLowerCase()

      this.headers[key] = options.headers[header]
      this.rawHeaders.push(key, options.headers[header])
    })
  }

}
