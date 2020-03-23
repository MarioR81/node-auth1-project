const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = ('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.json({ api: "Up, Up, and Away!!!" })
});

module.exports = server;