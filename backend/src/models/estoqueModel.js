const connection = require("./connection");

const getAll = async () => {
    const [estoque] = await connection.execute("SELECT * FROM estoque");
    return estoque;
}

const createEstoque = async (task) => {
    const {name, quantity} = task;

    const query = "INSERT INTO estoque (name, quantity) VALUES(?, ?)"

    const [createdEstoque] = await connection.execute(query, [name, quantity]);
    
    return {insertID: createdEstoque.insertId, message: "item criado com sucesso"};

}

const deleteEstoque = async (id) => {
    const [removedEstoque] = await connection.execute("DELETE FROM estoque WHERE id = ?", [id]);
    return removedEstoque;
};

const updateEstoque = async (id, task) => {
    const { name, quantity } = task;

    const query = "UPDATE estoque SET name = ?, quantity = ? WHERE id = ?";

    const [updatedEstoque] = await connection.execute(query, [name, quantity, id]);
    return updatedEstoque;
};

module.exports = {
    getAll,
    createEstoque,
    deleteEstoque,
    updateEstoque
};