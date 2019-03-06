import request from 'supertest'

const ticketDb = require('../../../server/db/tickets')
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
      title: 'Rope fraid',
      severity: 3
    },
    1: {
      id:2,
      title: 'Fallen trees restrict access',
      severity: 2 
    }
  }]

  ticketDb.getAllTickets.mockImplementation(() => Promise.resolve(expected))

  return request(server).get('/api/v1/tickets/all')
  .expect(200)
  .then(res => {
    let actual = res.body

    expect(actual).toEqual(expected)
  })
})