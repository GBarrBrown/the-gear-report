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