const request = require('supertest')
const { default: Helmet } = require('react-helmet')
const app = require('./app')

Helmet.canUseDOM = false

describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })
})
