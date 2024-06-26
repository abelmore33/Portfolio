const express = require("express");
const server = express();
const cors = require("cors");

const usersRouter = require("./users/users-router");

server.use(cors());
server.use(express.json());

server.use("/api/users", usersRouter);

module.exports = server;
