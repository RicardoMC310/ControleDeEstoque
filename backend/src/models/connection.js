//NOTE: imports
const mysql = require("mysql2/promise");
require("dotenv").config();

//NOTE: criando a conexão
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWD,
    database: process.env.MYSQL_DB
});


//NOTE: exportando a conexão
module.exports = connection;