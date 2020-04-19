const path = require("path");

const BabelEsmPlugin = require("babel-esm-plugin");

const argv = require("yargs").argv;

const isDev = argv.watch;

module.exports = {
  mode: isDev ? "development" : "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                  loose: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new BabelEsmPlugin({
      filename: "bundle.esm.js",
    }),
  ],
};
