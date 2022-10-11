const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.jsx",
  output: {
    filename: "[contenthash].js",
    publicPath: "/",
    assetModuleFilename: "assets/[contenthash][ext][query]",
    chunkFilename: "[contenthash].js",
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[hash:base64:5]",
              },
              sourceMap: false,
            },
          },
          {
            loader: "postcss-loader",
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|webp)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[hash:10][ext][query]",
        },
      },
      {
        test: /\.(svg)$/,
        type: "asset/resource",
        generator: {
          filename: "icons/[hash:10][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: false,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
      chunkFilename: "[contenthash].css",
    }),
    new webpack.DefinePlugin({
      __REACT_DEVTOOLS_GLOBAL_HOOK__: "({ isDisabled: true })",
    }),
    new webpack.BannerPlugin("(C) NORXND 2022"),
    new CopyPlugin({
      patterns: ["public"],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: ["...", new CssMinimizerPlugin()],
  },
};
