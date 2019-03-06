import request from 'supertest'

const db = require('../../../server/db/tickets')
const server = require('../../../server/server')

jest.mock('../../../server/db/tickets', () => ({
  getAllTickets: jest.fn()
  //TODO add other routes to test here
}))

// below is a suggestion of a test layout

test('GET / loads all tickets', () => {
  let expected = [{
    0: {
      id:1,
      task: 'Test Home',
      category: 'Study' 
    },
    1: {
      id:2,
      task: 'Test App',
      category: 'Study' 
    }
  }]

  db.getAllTickets.mockImplementation(() => Promise.resolve(expected))

  return request(server).get('/api/v1')
  .expect(200)
  .then(res => {
    let actual = res.body

    expect(actual).toEqual(expected)
  })
})