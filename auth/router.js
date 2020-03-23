const bcrypt = require('bcryptjs');

const router = require('express').Router();

const Users = require('../users/users-model.js');

router.post('/register', (req, res) => {
    const userInfo = req.body

    const ROUNDS = process.env.HASHING_ROUNDS || 8;
    // the password will be hashed and re-hashed 2 to the eight power
    const hash = bcrypt.hashSync(userInfo.password, ROUNDS);

    userInfo.password = hash;

    Users.add(userInfo)
    .then(user => {
        res.json(user);
    })
    .catch(err => res.send(err));
});

module.exports = router;