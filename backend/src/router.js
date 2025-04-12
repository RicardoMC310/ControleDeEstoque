//NOTE: imports
const express = require("express");
const estoqueController = require("./controllers/estoqueController");
const estoqueMiddleware = require("./middlewares/estoqueMiddleware");

//NOTE: criando o router
const router = express.Router();

//NOTE: routers
router.get("/tasks", estoqueController.getAll);
router.post("/tasks", estoqueMiddleware.validateBody, estoqueController.createdEstoque);
router.delete("/tasks/:id", estoqueController.deleteEstoque);
router.put("/tasks/:id", estoqueMiddleware.validateBody, estoqueController.updateEstoque);

//NOTE: exportando o router
module.exports = router;