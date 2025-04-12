const taskModel = require("../models/taskModel");

const getAll = async (_req, res) => {

    const tasks = await taskModel.getAll();

    return res.status(200).json(tasks);
}

const createdTask = async (req, res) => {
    const createdTask = await taskModel.createTask(req.body);

    return res.status(201).json(createdTask);
};

module.exports = {
    getAll,
    createdTask
};