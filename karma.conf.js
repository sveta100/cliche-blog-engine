const webpackConfig = require("./webpack.config");

module.exports = function(config) {
  config.set({
    frameworks: ["mocha", "chai"],

    files: ["tests/**/*.spec.js"],

    preprocessors: {
      "**/*.spec.js": ["webpack", "sourcemap"]
    },

    webpack: webpackConfig,

    reporters: ["spec"],

    browsers: ["Chrome"]
  });
};
