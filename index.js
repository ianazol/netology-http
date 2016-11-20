const server = require("./server");
const route = require("./router").route;
const handlers = require("./handlers");
const PORT = process.env.PORT || 3000;

server.start(PORT, route, handlers);