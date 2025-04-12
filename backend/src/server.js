//NOTE: imports
const app = require("./app");

//NOTE: configurando variaveis de ambiente
require("dotenv").config();

//NOTE: subindo o servidor
const host = process.env.SERVER_HOST || "localhost";
const port = process.env.SERVER_PORT || 3303;

app.listen(port, host, () => console.log(`Rodando em http://${host}:${port}`));