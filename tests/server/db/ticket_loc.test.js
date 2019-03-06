const testEnv = require('../setup-db')
const db = require('../../../server/db/ticket_loc')

let testDb = null

// test db setup 

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

// suggested test structure

test('GET returns the correct number of entries', () => {
  let expected = 9

  return db.getTicketsByLoc(1, testDb)
  .then(tickets => {
    let actual = tickets.length

    expect(actual).toEqual(expected)
  })
})

test('GET returns the correct type of entries', () => {
  let expected = 'object'

  return db.getTicketsByLoc(1, testDb)
  .then(tickets => {
    let actual = typeof tickets

    expect(actual).toEqual(expected)
  })
})

test('GET returns the entries with the correct parent', () => {
  let expected = 1

  return db.getTicketsByLoc(1, testDb)
  .then(tickets => {
    let actual = tickets[0].loc_id

    expect(actual).toEqual(expected)
  })
})