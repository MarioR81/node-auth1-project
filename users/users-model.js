const db = require('../database/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('users').select('id', 'username');
}

function findBy(filter) {
    return db ('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user, 'id');

    return findById(id)
}

function findById(id) {
    return db('users')
    .where({ id })
    .select('id', 'username')
    .first();
}