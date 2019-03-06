const testEnv = require('../setup-db')
const db = require('../../../server/db/users')

let testDb = null

// test db setup 
beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

// testing db user functions
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

test('POST creates a user with email and password', () => {
  let expected = 11
  let userInfo = {
    name: 'Test Testing',
    email: 'new@test.email.com'
  }
  return db.createUser(userInfo, testDb)
  .then(newUserId => {
    let actual = newUserId[0]
    expect(actual).toEqual(expected)
  })
})

test('GET returns user if given email', () => {
  let expected = 'Eve Eden'
  let email = 'eve@test.email.com'
  return db.getUserByEmail(email, testDb)
  .then(user => {
    let actual = user.name
    expect(actual).toEqual(expected)
  })
})