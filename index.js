const globalPath = process.env.PLUGDO_GLOBAL_PATH || "./source/app.config.js";
global.settings = require(globalPath).settings()[process.env.PLUGDO_GLOBAL_ENV || "dev"];
const server = require("@dellasera/plugdo-server").server();
const path = require("path");
const port = process.env.PORT === undefined ? 4000 : process.env.PORT;

server.start(port, path.resolve(__dirname));