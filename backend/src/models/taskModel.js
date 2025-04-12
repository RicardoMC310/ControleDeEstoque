const connection = require("./connection");

const getAll = async () => {
    const [tasks] = await connection.execute("SELECT * FROM estoque");
    return tasks;
}

const createTask = async (task) => {
    const {name, quantity} = task;

    const query = "INSERT INTO estoque (name, quantity) VALUES(?, ?)"

    const [createdTask] = await connection.execute(query, [name, quantity]);
    
    return {insertID: createdTask.insertId};

}

module.exports = {
    getAll,
    createTask
};