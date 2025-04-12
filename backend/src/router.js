//NOTE: imports
const express = require("express");
const estoqueController = require("./controllers/estoqueController");
const estoqueMiddleware = require("./middlewares/estoqueMiddleware");

//NOTE: criando o router
const router = express.Router();

//NOTE: routers
router.get("/estoque", estoqueController.getAll);
router.post("/estoque", estoqueMiddleware.validateBody, estoqueController.createdEstoque);
router.delete("/estoque/:id", estoqueController.deleteEstoque);
router.put("/estoque/:id", estoqueMiddleware.validateBody, estoqueController.updateEstoque);

//NOTE: exportando o router
module.exports = router;