//NOTE: imports
const express = require("express");

//NOTE: criando o router
const router = express.Router();

//NOTE: routers
router.get("/", (request, response) => {
    response.status(200).send("Hello, Server!");
});

//NOTE: exportando o router
module.exports = router;