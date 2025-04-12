//NOTE: imports
const express = require("express");
const app = require("./app");

//NOTE: subindo o servidor
app.listen(3303, "localhost", () => console.log("Rodando no http://localhost:3303"));