// const globalPath = process.env.PLUGDO_GLOBAL_PATH || "./source/app.config.js";
// global.settings = require(globalPath).settings()[process.env.PLUGDO_GLOBAL_ENV || 'dev'];
// const server = require("@dellasera/plugdo-server").server();
// const path = require("path");
// const port = process.env.PORT === undefined ? 3400 : process.env.PORT;
// server.start(port, path.resolve(__dirname));

const plugdo = require("plugdo-node").node();
const path = require("path");
const globalPath = process.env.PLUGDO_GLOBAL_PATH || "./source/app.config.js";
global.settings = require(globalPath).settings()[process.env.PLUGDO_GLOBAL_ENV || 'dev'];
const port = process.env.PORT === undefined ? 3400 : process.env.PORT;
plugdo.start(port, path.resolve(__dirname));