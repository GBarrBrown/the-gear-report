const connection = require('./connection')

function getLocations(testDb) {
    const db = testDb || connection
    return db('locations')
}

function getLocationById(id, testDb) {
    const db = testDb || connection
    return db('locations').where('id', id).select()
}

function getLocationsByParent(id, testDb) {
    const db = testDb || connection
    return db('locations').where('parent_id', id).select()
}

module.exports = {
    getLocations,
    getLocationById,
    getLocationsByParent
}