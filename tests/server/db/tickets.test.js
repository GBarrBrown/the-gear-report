const testEnv = require('../setup-db')
const db = require('../../../server/db/tickets')

let testDb = null

// test db setup 

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

// suggested test structure


test('GET gets all the tickets', () => {
  let expected = 9

  return db.getAllTickets(testDb)
  .then(tickets => {
    let actual = tickets.length

    expect(actual).toEqual(expected)
  })
})

test('GET ticket by id with existing ticket id', () => {
  let expected = 'Fallen Tree'

  return db.getTicketById(5, testDb)
  .then(res => {
    let ticket = res[0]
    let actual = ticket.title

    expect(actual).toEqual(expected)
  })
})

test('GET ticket by id with non-existent ticket id', () => {
  let expected = []

  return db.getTicketById(0, testDb)
  .then(ticket => {
    let actual = ticket

    expect(actual).toEqual(expected)
  })
})

test('GET ticket by id passing it a string', () => {
  let expected = []

  return db.getTicketById('testString', testDb)
  .then(ticket => {
    let actual = ticket

    expect(actual).toEqual(expected)
  })
})