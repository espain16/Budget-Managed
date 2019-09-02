//Import dependencies, middleware and routers
//Import dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//Declare routers
const server =express();

//Declare middleware
server.use(helmet())
server.use(express.json())
server.use(cors())

module.exports = server;
