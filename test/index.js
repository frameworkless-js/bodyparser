const assert = require('assert')
const { readFileSync } = require('fs')

const json = require('./formats/json')
const formdata = require('./formats/formdata')
const multipart = require('./formats/multipart')
const fileUpload = require('./formats/multipart-file')

const { parseBody } = require('../')

const run = async () => {
  console.info('=> Testing application/json parser')
  json.run()

  const jsonPayload = await parseBody(json.request)
  assert.deepStrictEqual(jsonPayload, json.fixture)
  console.log('✔  application/json\'s good!\n\n')

  console.info('=> Testing application/x-www-form-urlencoded parser')
  formdata.run()

  const formdataPayload = await parseBody(formdata.request)
  assert.deepStrictEqual(formdataPayload, formdata.fixture)
  console.log('✔  application/x-www-form-urlencoded\'s good!\n\n')

  console.info('=> Testing multipart/form-data parser')
  multipart.run()

  const multipartPayload = await parseBody(multipart.request)

  assert.deepStrictEqual(multipartPayload, { ...multipart.fixture, attachments: {} })
  console.log('✔  multipart/form-data\'s good!\n\n')

  console.info('=> Testing multipart/form-data parser with a file upload')
  fileUpload.run()

  const fileUploadPayload = await parseBody(fileUpload.request)
  const { attachments } = fileUploadPayload

  assert(attachments.image)

  assert.deepStrictEqual(attachments.image.encoding, '7bit')
  assert.deepStrictEqual(attachments.image.fieldname, 'image')
  assert.deepStrictEqual(attachments.image.filename, 'fl_.png')
  assert.deepStrictEqual(attachments.image.mimetype, 'image/png')
  assert.deepStrictEqual(attachments.image.body, readFileSync('./test/fl_.png'))

  assert(!attachments.json)

  console.log('✔  multipart/form-data and file upload are good!\n\n')
}

run().then(() => {
  console.log('=> Test suite passed!')
}).catch(error => {
  console.error('=> Test suite failed:', error)
})
