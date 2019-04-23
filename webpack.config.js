const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

function htmlPlugin({ template, chunks, filename }) {
  return new HtmlWebpackPlugin({
    template,
    chunks,
    filename
  });
}

module.exports = {
  entry: {
    background: path.join(__dirname, "src/background.js"),
    newtab: path.join(__dirname, "src/newtab.js"),
    popup: path.join(__dirname, "src/popup.js")
  },
  output: {
    path: path.join(__dirname, "extension"),
    filename: chunkData => {
      return chunkData.chunk.name === "background"
        ? "[name].js"
        : "static/js/[name].[chunkhash:8].js";
    },
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
      template: "src/popup.html",
      chunks: ["popup"],
      filename: "popup.html"
    }),
    htmlPlugin({
      template: "src/newtab.html",
      chunks: ["newtab"],
      filename: "newtab.html"
    }),
    new CopyPlugin([
      {
        from: "src/icon_128.png",
        to: "icon_128.png",
        toType: "file"
      },
      {
        from: "src/manifest.json",
        to: "manifest.json",
        toType: "file"
      }
    ])
  ],
  resolve: {
    extensions: [".js", ".jsx", ".png"]
  },
  optimization: {
    minimize: false
  },
  devServer: {
    port: 3001
  }
};
