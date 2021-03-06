const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/router.js');
const restricted = require('../auth/restricted-middleware.js');

const server = express();

const sessionConfig = {
    name: "monster",
    secret: "keep it secret, keep it safe!",
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false, //should be true in production
        httpOnly: true, // true means No access from JS
    },
    resave: false,
    saveUninitialized: true, //GDPR laws, require to check with client before saving cookies
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig))

server.use('/api/users', restricted, usersRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.json({ api: "Up, Up, and Away!!!" })
});

module.exports = server;