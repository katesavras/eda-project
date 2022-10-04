const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: ["./resources/scripts/index.js", "./resources/styles/index.scss"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  devServer: {
    overlay: true,
    compress: true,
    liveReload: true,
    watchContentBase: true,
    open: true,
    host: "localhost",
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|png|jpe?g|svg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
