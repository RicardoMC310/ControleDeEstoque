//NOTE: imports
const express = require("express");
const taskController = require("./controllers/taskController");

//NOTE: criando o router
const router = express.Router();

//NOTE: routers
router.get("/tasks", taskController.getAll);

//NOTE: exportando o router
module.exports = router;