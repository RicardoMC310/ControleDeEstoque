//NOTE: imports
const express = require("express");
const router = require("./router");

//NOTE: criando o app
const app = express();

//NOTE: usando o router
app.use(express.json());
app.use(router);

//NOTE: exportando o app
module.exports = app;