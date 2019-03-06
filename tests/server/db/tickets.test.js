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

// -- getTicketById --
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

// -- getTicketsByIds
test('GET tickets by ids with existing ids', () => {
  let expected = ['Rockfall', 'Rock slide']
  let ticketArr = [3,9]

  return db.getTicketsByIds(ticketArr, testDb)
  .then(res => {
    let result = [res[0].title, res[1].title]
    let actual = result

    expect(actual).toEqual(expected)
  })
})

test('GET tickets by ids with 2 non-existent ids', () => {
  let expected = []
  let ticketArr = [0, 999999999999999]

  return db.getTicketsByIds(ticketArr, testDb)
  .then(res => {
    let actual = res

    expect(actual).toEqual(expected)
  })
})

test('GET tickets by ids with 1 non-existant and 1 existing id', () => {
  let expected = 1
  let ticketArr = [0, 3]

  return db.getTicketsByIds(ticketArr, testDb)
  .then(res => {
    let actual = res.length

    expect(actual).toEqual(expected)
  })
})

// -- getTicketCreator
test('GET ticket creator with existing ticket id', () => {
  let expected = 'Bob Blogs'
  let creatorId = 1

  return db.getTicketCreator(creatorId, testDb)
  .then(res => {
    let actual = res.name

    expect(actual).toEqual(expected)
  })
})

// -- getTopContributors
test('GET top contributors - should not return > 5 results', () => {
  let expected = 5

  return db.getTopContributors(testDb)
  .then(res => {
    let actual = res.length

    expect(actual).toBeLessThanOrEqual(expected)
  })
})

