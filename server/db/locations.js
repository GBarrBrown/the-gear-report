const knex = require ('knex')
const config = require ('../../knexfile').development
const db = knex(config)


function getLocations() {
    return db('locations')
}

function getLocationById(id) {
    return db('locations').where('id', id).select()
}

function getLocationsByParent(id) {
    return db('locations').where('parent_id', id).select()
}

module.exports = {
    getLocations,
    getLocationById,
    getLocationsByParent
}