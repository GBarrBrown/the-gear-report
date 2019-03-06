import request from 'supertest'

const db = require('../../../server/db/users')
const server = require('../../../server/server')

jest.mock('../../../server/db/users', () => ({
  getUserById: jest.fn()
}))

// login routes test

test('GET / loads user by id 10', () => {
  let expected = [{
    0: {
      id:10,
      name: 'McTest McTester',
      email: 'mctester@test.world'
    },
  }]

  db.getUserById.mockImplementation(() => Promise.resolve(expected))

  return request(server).get('/api/v1/login')
  .expect(200)
  .then(res => {
    let actual = res.body

    expect(actual).toEqual(expected)
  })
})
