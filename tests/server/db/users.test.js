const testEnv = require('../setup-db')
const db = require('../../../server/db/users')

let testDb = null

// test db setup 

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

// suggested test structure

test('GET user by id', () => {
  let expected = 'Hulk Hogan'

  return db.getUserById(8, testDb)
  .then(user => {
    let actual = user.name

    expect(actual).toEqual(expected)
  })
})

test('GET returns true if user exists', () => {
  let expected = true
  let email = 'magnum-dong@test.email.com'
  return db.userExists(email, testDb)
  .then(result => {
    let actual = result

    expect(actual).toEqual(expected)
  })
})

test('GET returns false if user doesn\'t exist', () => {
  let expected = false
  let email = 'fail@test.email.com'
  return db.userExists(email, testDb)
  .then(result => {
    let actual = result

    expect(actual).toEqual(expected)
  })
})