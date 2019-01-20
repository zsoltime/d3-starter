const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.s(c|a)ss$/,
          use: [
            {
              loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
              options: { sourceMap: true },
            },
            { loader: 'css-loader', options: { sourceMap: true } },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer],
                sourceMap: true,
              },
            },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ],
        },
      ],
    },
    resolve: {
      mainFields: ['module', 'main'],
      modules: [path.resolve(__dirname), 'node_modules'],
      alias: {
        styles: 'src/sass/style.sass',
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'style.[hash].css',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      hot: true,
      overlay: true,
    },
  };
};
