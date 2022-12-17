const { createServer } = require("http")
const sendRes = require("./helper/responseHandler")
const app = require("./app")
const server = createServer(app)
const PORT = 8001;
server.listen(PORT, _ => console.log(`Server is listing on port ${PORT}`))