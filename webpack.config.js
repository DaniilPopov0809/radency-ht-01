const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
  devServer: {
    port: 3000,
    static: path.join(__dirname, 'build'),
    open: true,
    hot: true,
    client: {
      logging: "none",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  mode: "development",
};
