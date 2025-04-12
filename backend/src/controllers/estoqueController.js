const estoqueModel = require("../models/estoqueModel");

const getAll = async (_req, res) => {

    const estoque = await estoqueModel.getAll();

    return res.status(200).json(estoque);
}

const createdEstoque = async (req, res) => {
    const createdEstoque = await estoqueModel.createEstoque(req.body);

    return res.status(201).json(createdEstoque);
};

const deleteEstoque = async (req, res) => {
    const { id } = req.params;

    await estoqueModel.deleteEstoque(id);

    return res.status(204).json();

};

const updateEstoque = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    await estoqueModel.updateEstoque(id, body);

    return res.status(204).json();
};

module.exports = {
    getAll,
    createdEstoque,
    deleteEstoque,
    updateEstoque
};