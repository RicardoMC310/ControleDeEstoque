const app = require("./app");

require("dotenv").config();

const host = process.env.SERVER_HOST || "localhost";
const port = process.env.SERVER_PORT || 3303;

app.listen(port, host, () => console.log(`Rodando em http://${host}:${port}`));