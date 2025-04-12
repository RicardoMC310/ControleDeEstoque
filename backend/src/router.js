//NOTE: imports
const express = require("express");
const taskController = require("./controllers/taskController");
const taskMiddle = require("./middlewares/taskMiddleware");

//NOTE: criando o router
const router = express.Router();

//NOTE: routers
router.get("/tasks", taskController.getAll);
router.post("/tasks", taskMiddle.validateBody, taskController.createdTask);

//NOTE: exportando o router
module.exports = router;