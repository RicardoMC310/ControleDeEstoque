//NOTE: imports
const app = require("./app");

//NOTE: configurando variaveis de ambiente
require("dotenv").config();

//NOTE: subindo o servidor
const port = process.env.SERVER_PORT || 3303;

app.listen(port, () => console.log(`Rodando na porta ${port}`));