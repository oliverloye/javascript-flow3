const server = require("./app");
server(1234).then(() => console.log("Server started on port: 1234"));