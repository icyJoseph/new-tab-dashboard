const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function htmlPlugin({ template, chunks, filename }) {
  return new HtmlWebpackPlugin({
    template,
    chunks,
    filename
  });
}

module.exports = {
  entry: {
    newtab: path.join(__dirname, "extension/src/newtab.js"),
    popup: path.join(__dirname, "extension/src/popup.js")
  },
  output: {
    path: path.join(__dirname, "extension/dist"),
    filename: "static/js/[name].[chunkhash:8].js",
    chunkFilename: "static/js/[name].[chunkhash:8].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ["file-loader", "image-webpack-loader"]
      }
    ]
  },
  plugins: [
    htmlPlugin({
      template: "extension/src/popup.html",
      chunks: ["popup"],
      filename: "popup.html"
    }),
    htmlPlugin({
      template: "extension/src/newtab.html",
      chunks: ["newtab"],
      filename: "newtab.html"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".png"]
  },
  devServer: {
    port: 3001
  }
};
