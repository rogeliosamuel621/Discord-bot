const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.jsx"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      {
        test: /\.css$i/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/i,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "src/index.jsx"),
    hot: true,
    port: 8080,
  },
};
