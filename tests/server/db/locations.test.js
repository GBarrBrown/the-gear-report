const testEnv = require('../setup-db')
const db = require('../../../server/db/locations')

let testDb = null

// test db setup 

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

// suggested test structure

test('GET gets all the locations', () => {
  let expected = 103

  return db.getLocations(testDb)
  .then(locations => {
    let actual = locations.length

    expect(actual).toEqual(expected)
  })
})

test('Returns an object', () => {
  let expected = 'object'

  return db.getLocations(testDb)
  .then(locations => {
    let actual = typeof locations[0]

    expect(actual).toEqual(expected)
  })
})

test('Returns the correct entry', () => {
  let expected = 2

  return db.getLocationById(2, testDb)
  .then(location => {
    let actual = location[0].id

    expect(actual).toEqual(expected)
  })
})

test('Fails if id is not in db', () => {
  let expected = []

  return db.getLocationById(99999, testDb)
  .then(location => {
    let actual = location

    expect(actual).toEqual(expected)
  })
})

test('Fails if id is wrong type', () => {
  let expected = []

  return db.getLocationById('string', testDb)
  .then(location => {
    let actual = location

    expect(actual).toEqual(expected)
  })
})

test('Returns the correct number of entries', () => {
  let expected = 8

  return db.getLocationsByParent(3, testDb)
  .then(location => {
    let actual = location.length

    expect(actual).toEqual(expected)
  })
})

test('Number of returns change with different ids', () => {
  let expected = 7

  return db.getLocationsByParent(6, testDb)
  .then(location => {
    let actual = location.length

    expect(actual).toEqual(expected)
  })
})



test('Fails if passed the wrong datatype', () => {
  let expected = 0

  return db.getLocationsByParent('farsical aquatic ceremony', testDb)
  .then(location => {
    let actual = location.length

    expect(actual).toEqual(expected)
  })
})

test('Returns 0 if passed wrong input type', () => {
  let expected = 0

  return db.getLocationsByParent('hello', testDb)
  .then(location => {
    let actual = location.length

    expect(actual).toEqual(expected)
  })
})