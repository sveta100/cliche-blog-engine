// Transpile all code following this line with babel
require("babel-register")({
  presets: ["env"]
});

// Import the rest of the app
module.exports = require("./server.js");
