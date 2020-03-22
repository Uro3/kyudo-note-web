const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}/public`,
    filename: '[hash].main.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: `${__dirname}/docs`,
    port: 3000,
    inline: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css'
    }),
    new Dotenv({
      systemvars: true
    }),
  ],
};
