const taskModel = require("../models/taskModel");

const getAll = (req, res) => {
    return res.status(200).json({message: "controler ta funcionando"})
}

module.exports = {
    getAll
};